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

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
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
    this.parent = document.querySelector(parentSelector)
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
    this.parent.append(element)
  }
}


new MenuCard(
  "img/tabs/vegy.jpg",
  "vegy",
  'Меню "Фитнес"',
  'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
  25,
  '.menu .container',
  'menu__item'
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



// const log = function(a, b, ...rest) {
//   console.log(a, b, rest)
// }

// log('basic', 'rest', 'operator', 'usage')

// function calcOrDouble(number, basis) {
//   console.log(number * basis);
// }

// calcOrDouble(3, 5)


// window.addEventListener("scroll", showModalByScroll);

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



//Глубокое клонирование

const persone = {
  name: 'Dmitrii',
  phone: '+38090905215',
  parents: {
    dad: 'Vova',
    mom: 'Lena'
  }
};

const obj = JSON.parse(JSON.stringify(persone));

obj.parents.mom = 'Ann';
console.log(persone)
console.log(obj)