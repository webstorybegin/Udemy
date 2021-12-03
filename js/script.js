///////////////////////////////////////////////////////// ПРОЕКТ

let tabs = document.querySelectorAll(".tabheader__item"),
  tabsContent = document.querySelectorAll(".tabcontent"),
  tabsParent = document.querySelector(".tabheader__items"),
  button = document.querySelector(".btn"),
  buttonModal = document.querySelector(".btn_white");
(modal = document.querySelector(".modal")),
  (modalContent = document.querySelector(".modal__content")),
  (closeBtn = document.querySelector(".modal__close"));

function hideTabContent() {
  tabsContent.forEach((item) => {
    item.classList.add("hide");
    item.classList.remove("show", "fade");
  });

  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
}

function showTabContent(i = 0) {
  tabsContent[i].classList.add("show", "fade");
  tabsContent[i].classList.remove("hide");
  tabs[i].classList.add("tabheader__item_active");
}

hideTabContent();
showTabContent();

tabsParent.addEventListener("click", function (event) {
  const target = event.target;
  if (target && target.classList.contains("tabheader__item")) {
    tabs.forEach((item, i) => {
      if (target == item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

function showModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
  clearInterval();
}

buttonModal.addEventListener("click", showModal);

modal.addEventListener("click", function (e) {
  if (e.target === modal || e.target === closeBtn) {
    closeModal();
    document.body.style.overflow = "hidden";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.code === "Escape" && modal.classList.contains("show")) {
    closeModal();
  }
});

function showModalByScroll() {
  if (
    window.pageYOffset + document.documentElement.clientHeight >=
    document.documentElement.scrollHeight
  ) {
    showModal();
    window.removeEventListener("scroll", showModalByScroll);
    document.body.style.overflow = "auto";
  }
}

// window.addEventListener("scroll", showModalByScroll);

// Используем классы для карточек

class MenuCard {
  constructor(src, alt, title, desctiption, price, parentSelector, ...classes) {
    this.src = src;
    this.alt = alt;
    this.title = title;
    this.desctiption = desctiption;
    this.price = price;
    this.classes = classes;
    this.parent = document.querySelector(parentSelector);
    this.transfer = 27;
    this.changeToUAH();
  }

  changeToUAH() {
    this.price = this.price * this.transfer;
  }

  render() {
    const element = document.createElement("div");
    if (this.classes.length === 0) {
      this.element = "menu__item";
      element.classList.add(this.element);
    } else {
      this.classes.forEach((className) => element.classList.add(className));
    }

    element.innerHTML = `
      <img src=${this.src} alt=${this.alt}>
      <h3 class="menu__item-subtitle">${this.title}</h3>
      <div class="menu__item-descr">${this.desctiption}</div>
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
      </div>
    `;
    this.parent.append(element);
  }
}

const getResource = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status ${res.status}`);
  }

  return res.json();
};

axios.get("http://localhost:3000/menu").then((data) =>
  data.data.forEach(({ img, altimg, title, descr, price }) => {
    new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
  })
);

function createCard(data) {
  data.forEach(({ img, altimg, title, descr, price }) => {
    const element = document.createElement("div");

    element.classList.add("menu__item");

    element.innerHTML = `
      <img src=${img} alt=${altimg}>
      <h3 class="menu__item-subtitle">${title}</h3>
      <div class="menu__item-descr">${descr}</div>
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${price}</span> грн/день</div>
      </div>
    `;

    document.querySelector(".menu .container").append(element);
  });
}

//Forms

const forms = document.querySelectorAll("form");

const message = {
  spinner: "img/spinner.svg",
  success: "Спасибо, скоро мы с вами свяжемся",
  failure: "Что-то пошло не так...",
};

forms.forEach((item) => {
  bindPostData(item);
});

const postData = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: data,
  });

  return await res.json();
};

function bindPostData(form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const spinner = document.createElement("img");
    spinner.src = message.spinner;
    spinner.style.cssText = `
      display: block;
      margin: 0 auto;
    `;
    form.insertAdjacentElement("afterend", spinner);

    const formData = new FormData(form);

    const json = JSON.stringify(Object.fromEntries(formData.entries()));

    postData("http://localhost:3000/requests", json)
      .then((data) => {
        console.log(data);
        showThanksModal(message.success);
        statusMessage.remove();
      })
      .catch(() => {
        showThanksModal(message.failure);
      })
      .finally(() => {
        form.reset();
      });
  });
}

function showThanksModal(message) {
  const prevModalDialog = document.querySelector(".modal__dialog");
  prevModalDialog.classList.add("hide");
  showModal();

  const thanksModal = document.createElement("div");
  thanksModal.classList.add("modal__dialog");
  thanksModal.innerHTML = `
    <div class="modal__content">
      <div class="modal__close" data-close>
        ×
      </div>
      <div class="modal__title">
        ${message}
      </div>
    </div>
  `;

  document.querySelector(".modal").append(thanksModal);
  setTimeout(() => {
    thanksModal.remove();
    prevModalDialog.classList.add("show");
    prevModalDialog.classList.remove("hide");
    closeModal();
  }, 4000);
}

// Slider

const slides = document.querySelectorAll(".offer__slide");
const slider = document.querySelector(".offer__slider");
const prev = document.querySelector(".offer__slider-prev");
const next = document.querySelector(".offer__slider-next");
const current = document.querySelector("#current");
const total = document.querySelector("#total");
const slidesWrapper = document.querySelector(".offer__slider-wrapper");
const slidesField = document.querySelector(".offer__slider-inner");
const widthSlides = window.getComputedStyle(slidesWrapper).width;
const dots = document.createElement("ol");
const dotsArr = [];

dots.classList.add("carousel-dots");
slider.append(dots);

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("li");
  dot.setAttribute("data-slide-to", i + 1);
  dot.classList.add("dot");
  if (i == 0) {
    dot.style.opacity = 1;
  }
  dots.append(dot);
  dotsArr.push(dot);
}

let indexSlide = 1;
let offset = 0;

if (slides.length < 10) {
  total.textContent = `0${slides.length}`;
  current.textContent = `0${indexSlide}`;
} else {
  total.textContent = slides.length;
  current.textContent = indexSlide;
}

slidesField.style.width = 100 * slides.length + "%";
slides.forEach((slide) => {
  slide.style.width = widthSlides;
});

function deleteDigits(string) {
  return +string.replace(/\D/g, "");
}

prev.addEventListener("click", () => {
  if (offset == 0) {
    offset = deleteDigits(widthSlides) * (slides.length - 1);
  } else {
    offset -= deleteDigits(widthSlides);
  }

  slidesField.style.transform = `translateX(-${offset}px)`;

  if (indexSlide == 1) {
    indexSlide = slides.length;
  } else {
    indexSlide--;
  }

  if (slides.length < 10) {
    current.textContent = `0${indexSlide}`;
  } else {
    current.textContent = indexSlide;
  }

  dotsArr.forEach((dot) => (dot.style.opacity = ".5"));
  dotsArr[indexSlide - 1].style.opacity = 1;
});

next.addEventListener("click", () => {
  if (offset == deleteDigits(widthSlides) * (slides.length - 1)) {
    offset = 0;
  } else {
    offset += deleteDigits(widthSlides);
  }

  slidesField.style.transform = `translateX(-${offset}px)`;

  if (indexSlide == slides.length) {
    indexSlide = 1;
  } else {
    indexSlide++;
  }

  if (slides.length < 10) {
    current.textContent = `0${indexSlide}`;
  } else {
    current.textContent = indexSlide;
  }

  dotsArr.forEach((dot) => (dot.style.opacity = ".5"));
  dotsArr[indexSlide - 1].style.opacity = 1;
});

dotsArr.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const slideTo = e.target.getAttribute("data-slide-to");

    indexSlide = slideTo;

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slides.length < 10) {
      current.textContent = `0${indexSlide}`;
    } else {
      current.textContent = indexSlide;
    }

    dotsArr.forEach((dot) => (dot.style.opacity = ".5"));
    dotsArr[indexSlide - 1].style.opacity = 1;
  });
});

// CALCULATOR

const result = document.querySelector(".calculating__result span");

let sex, height, weight, age, ratio;

if (localStorage.getItem("sex")) {
  sex = localStorage.getItem("sex");
} else {
  sex = "female";
  localStorage.setItem("sex", "female");
}

if (localStorage.getItem("ratio")) {
  ratio = localStorage.getItem("ratio");
} else {
  ratio = 1.375;
  localStorage.setItem("ratio", 1.375);
}

function calcTotal() {
  if (!sex || !height || !weight || !age || !ratio) {
    result.textContent = "____";
    return;
  }
  if (sex === "female") {
    result.textContent = Math.round(
      (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio
    );
  } else {
    result.textContent = Math.round(
      (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio
    );
  }
}

calcTotal();

function initLocalSettings(selector, activeClass) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((elem) => {
    elem.classList.remove(activeClass);
    if (elem.getAttribute("id") === localStorage.getItem("sex")) {
      elem.classList.add(activeClass);
    }
    if (elem.getAttribute("data-ratio") === localStorage.getItem("ratio")) {
      elem.classList.add(activeClass);
    }
  });
}

initLocalSettings("#gender div", "calculating__choose-item_active");
initLocalSettings(
  ".calculating__choose_big div",
  "calculating__choose-item_active"
);

function getStaticInformation(selector, activeClass) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      if (e.target.getAttribute("data-ratio")) {
        ratio = +e.target.getAttribute("data-ratio");
        localStorage.setItem("ratio", +e.target.getAttribute("data-ratio"));
      } else {
        sex = e.target.getAttribute("id");
        localStorage.setItem("sex", e.target.getAttribute("id"));
      }

      elements.forEach((elem) => {
        elem.classList.remove(activeClass);
      });

      e.target.classList.add(activeClass);

      calcTotal();
    });
  });
}

getStaticInformation("#gender div", "calculating__choose-item_active");
getStaticInformation(
  ".calculating__choose_big div",
  "calculating__choose-item_active"
);

function getDynamicInformation(selector) {
  const input = document.querySelector(selector);

  input.addEventListener("input", () => {
    if (input.value.match(/\D/g)) {
      input.style.border = "1px solid red";
    } else {
      input.style.border = "none";
    }
    switch (input.getAttribute("id")) {
      case "height":
        height = +input.value;
        break;
      case "weight":
        weight = +input.value;
        break;
      case "age":
        age = +input.value;
        break;
    }

    calcTotal();
  });
}

getDynamicInformation("#height");
getDynamicInformation("#weight");
getDynamicInformation("#age");

// showSlides(indexSlide);

// if (slides.length < 10) {
//   total.textContent = `0${slides.length}`;
// } else {
//   total.textContent = slides.length;
// }

// function showSlides(n) {
//   if (n > slides.length) {
//     indexSlide = 1
//   }

//   if (n < 1) {
//     indexSlide = slides.length;
//   }

//   if (slides.length < 10) {
//     current.textContent = `0${indexSlide}`;
//   } else {
//     current.textContent = indexSlide;
//   }

//   slides.forEach(item => item.classList.add('hide'));
//   slides[indexSlide - 1].classList.remove('hide');
// }

// function plusSlides(n) {
//   showSlides(indexSlide += n);
// }

// prev.addEventListener('click', () => {
//   plusSlides(-1)
// })

// next.addEventListener("click", () => {
//   plusSlides(+1);
// });

// LOCAL STORAGE

const checkbox = document.querySelector("#checkbox");
const form = document.querySelector("form");
const change = document.querySelector("#color");
const formLocalStorage = document.querySelector(".form-signin");

if (localStorage.getItem("isChecked")) {
  checkbox.checked = true;
}

checkbox.addEventListener("change", () => {
  localStorage.setItem("isChecked", true);
});

change.addEventListener("click", () => {
  if (localStorage.getItem("bg") === "changed") {
    formLocalStorage.style.backgroundColor = "white";
  } else {
    localStorage.setItem("bg", "changed");
    formLocalStorage.style.backgroundColor = "red";
  }
});

const persone = {
  name: "Dmitrii",
  age: 25,
};

const serializedPersone = JSON.stringify(persone);
// localStorage.setItem("alex", persone);

// console.log(localStorage.getItem('alex'));

///////////////////////////////////////////// ТЕОРИЯ

// const log = function(a, b, ...rest) {
//   console.log(a, b, rest)
// }

// log('basic', 'rest', 'operator', 'usage')

// function calcOrDouble(number, basis) {
//   console.log(number * basis);
// }

// calcOrDouble(3, 5)

// class Car {
//   constructor(model, color, price, country) {
//     this.model = model;
//     this.color = color;
//     this.price = price;
//     this.country = country;
//   }
//   buy() {
//     alert(
//       `Пользователь купил машину ${this.model} ${this.color} цвета за ${this.price}$ которая производится в ${this.country}`
//     );
//   }
//   exit() {
//     console.log(`После покупки ${this.model} покинул чат`)
//   }
// }

// const tesla = new Car('Tesla', 'черный', 3200, 'USA')

// tesla.buy();

// 1
// function showThis(a, b) {
//   console.log(this)
//   function sum() {
//     return a + b;
//   }
//   console.log(sum())
// }
// showThis(5, 5);

// 2.
// const obj = {
//   a: 20,
//   b: 15,
//   sum: function() {
//     function shout() {
//       console.log(this)
//     }
//     shout()
//   }
// }
// obj.sum();

//3
// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = () => {
//     console.log(`Hello! ` + this.name)
//   }
// }

// let ivan = new User('Ivan', 23)

//4
// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }

// const user = {
//   name: 'John'
// }

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count (num) {
//   return this*num;
// }

// const double = count.bind(2)
// console.log(double(3))

// 1) Обычная функция: this = window, но если use sctrict - undefined
// 2) Контекст у методов объектов - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind

// const btn = document.querySelector('.testButton');

// btn.addEventListener('click', (e) => {
//   e.target.style.backgroundColor = 'red'
// })

// const obj = {
//   num: 5,
//   sayNumber: function() {
//     const say = () => {
//       console.log(this.num)
//     }

//     say();
//   }
// }

// obj.sayNumber();

// const double = a => a * 2;

// console.log(double(4))

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   calcArea() {
//     return this.height * this.width;
//   }
// }

// class ColoredRectangleWithText extends Rectangle {
//   constructor(height, width, text, bg) {
//     super(height, width);
//     this.text = text;
//     this.bg = bg;
//   }

//   showMyProps() {
//     console.log(`Текст: ${this.text}, цвет: ${this.bg}`)
//   }
// }

// const div = new ColoredRectangleWithText(25, 10, 'Ya constructor', 'red')

// div.showMyProps()
// console.log(div.calcArea())
// // const square = new Rectangle(10, 10);
// // console.log(square.calcArea())

//////////////////////////// Глубокое клонирование

// const persone = {
//   name: 'Dmitrii',
//   phone: '+38090905215',
//   parents: {
//     dad: 'Vova',
//     mom: 'Lena'
//   }
// };

// const obj = JSON.parse(JSON.stringify(persone));

// obj.parents.mom = 'Ann';
// console.log(persone)
// console.log(obj)

// console.log("Запрос данных...");

////////////////////////////////// Promise

// const req = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Подготовка данных...");

//     const product = {
//       name: "TV",
//       price: 2000,
//     };

//     resolve(product);
//   }, 2000);
// });

// req
//   .then((product) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         product.status = "order";
//         resolve(product);
//       }, 2000);
//     });
//   })
//   .then((data) => {
//     data.modify = true;
//     return data;
//   })
//   .then((data) => {
//     console.log(data);
//   }).catch(() => {
//     console.error('Произошла ошибка')
//   }).finally(() => {
//     console.log('ВСЕ РАБОТАЕТ')
//   });

// const test = time => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(), time)
//   })
// }

// // test(1000).then(() => console.log('1000'));
// // test(2000).then(() => console.log('2000'));

// Promise.all([test(1000), test(2000)]).then(() => {
//   console.log('All')
// })

// Promise.race([test(1000), test(2000)]).then(() => {
//   console.log("All");
// });

////////////////////////////// API fake

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({name: 'Dmitrii'}),
//   headers: {
//     'Content-type' : 'application/json'
//   }
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

/////////////////////////// переборы массивов

// FILTER

// const names = ['Dmitry,', 'Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name) {
//   return name.length < 5;
// });

// console.log(shortNames)

// MAP

// const answers = ['IvAn', 'DmitrY', 'Hello'];

// const result = answers.map(item => item.toLocaleLowerCase());

// console.log(result)

// EVERY / SOME

// const some = [4, 'qwq', 'dasdasda'];

// console.log(some.some(item => typeof(item) === 'number'))
// console.log(some.every(item => typeof(item) === 'number'));

// REDUCE

// const arr = [4, 5, 1, 3, 2, 6];
//                         // 0    4  *** optional understanding
//                         // 4    5
//                         // 9    1
//                         // 10   3
//                         // 13   2
//                         // 15   6
// const result = arr.reduce((sum, current) => sum + current, 3)
// console.log(result)

// const arr = ['apple', 'pear', 'plum'];

// const result = arr.reduce((sum, current) => `${sum},  ${current}`)
// console.log(result)

// ENTRIES

// const obj = {
//   ivan: "persone",
//   ann: "persone",
//   dog: "animal",
//   cat: "animal",
// };

// const newArr = Object.entries(obj)
//   .filter((item) => item[1] === "persone")
//   .map((item) => item[0]);

// console.log(newArr);

// new RegExp('pattern', 'flags');
// /pattern/flags

const ans = "Введите ваше имя 1";

const reg = /w/;

console.log(ans.match(reg));

// d - только цифры
// w - только буквы
