const calc = require("./modules/calc");
const cards = require("./modules/cards");
const forms = require("./modules/forms");
const modal = require("./modules/modal");
const slider = require("./modules/slider");
const tabs = require("./modules/tabs");
const timer = require("./modules/timer");

calc();
cards();
forms();
modal();
slider();
tabs();
timer();

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
