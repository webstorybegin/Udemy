// ПРОЕКТ

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

window.addEventListener("scroll", showModalByScroll);

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

new MenuCard(
  "img/tabs/vegy.jpg",
  "vegy",
  'Меню "Фитнес"',
  'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
  25,
  ".menu .container",
  "menu__item"
).render();

new MenuCard(
  "img/tabs/elite.jpg",
  "elite",
  'Меню "Премиум"',
  "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
  2,
  ".menu .container",
  "menu__item"
).render();

new MenuCard(
  "img/tabs/post.jpg",
  "post",
  'Меню "Постное"',
  "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
  12,
  ".menu .container",
  "menu__item"
).render();

//Forms

const forms = document.querySelectorAll("form");

const message = {
  loading: "img/spinner.svg",
  success: "Спасибо, скоро мы с вами свяжемся",
  failure: "Что-то пошло не так...",
};

forms.forEach((item) => {
  postData(item);
});

function postData(form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const statusMessage = document.createElement("img");
    statusMessage.src = message.loading;
    statusMessage.style.cssText = `
      display: block;
      margin: 0 auto;
    `;
    form.insertAdjacentElement("afterend", statusMessage);

    const formData = new FormData(form);

    const object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });

    fetch("server1.php", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(object, null, 2),
    })
      .then((data) => data.text())
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
