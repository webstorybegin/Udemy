///////////////////////////////////////////// 12. Практика, ч.1. Начинаем создавать приложение =============

"use strict";

// const btn = document.querySelector('.btn');

// const personalMovieDB = {
//   count: 0,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
//   start: function () {
//     personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

//     while (
//       personalMovieDB.count == "" ||
//       personalMovieDB.count == null ||
//       isNaN(personalMovieDB.count)
//     ) {
//       personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     }
//   },
//   rememberMyFilms: function () {
//     for (let i = 0; i < 2; i++) {
//       const a = prompt("Один из последних просмотренных фильмов?", ""),
//         b = prompt("На сколько оцените его?", "");

//       if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//       } else {
//         console.log("error");
//         i--;
//       }
//     }
//   },
//   detectPersonalLevel: function () {
//     if (personalMovieDB.count < 10) {
//       console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//       console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//       console.log("Вы киноман");
//     } else {
//       console.log("Произошла ошибка");
//     }
//   },
//   showMyDB: function (hidden) {
//     if (!hidden) {
//       console.log(personalMovieDB);
//     }
//   },
//   toggleVisibleMyDB: function () {
//     if (personalMovieDB.privat) {
//       personalMovieDB.privat = false;
//     } else {
//       personalMovieDB.privat = true;
//     }
//   },
//   writeYourGenres: function () {
//     for (let i = 1; i < 2; i++) {
//       let genre = prompt(`Ваш любимый жанр под номером ${i}`);

//       if (genre === "" || genre == null) {
//         console.log("Вы ввели некорректные данные или не ввели их вовсе");
//         i--;
//       } else {
//         personalMovieDB.genres[i - 1] = genre;
//       }

//       // Альтернативный вариант из урока

//       // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

//       // if (genres === '' || genres == null) {
//       //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
//       //     i--;
//       // } else {
//       //     personalMovieDB.genres = genres.split(', ');
//       //     personalMovieDB.genres.sort();
//       // }
//     }

//     personalMovieDB.genres.forEach((item, i) => {
//       console.log(`Любимый жанр ${i + 1} - это ${item}`);
//     });
//   },
// };

// btn.addEventListener('click', function(e) {
//   e.preventDefault();
//   personalMovieDB.rememberMyFilms();
// })

///////////////////////////////////////////// 13 условия

// 1
/*if (4 == 9) {
  console.log("Это правда!");
} else {
  console.log("Вранье");
}


const num = 50;

// 2
if (num < 49) {
  console.log('Error')
} else if (num > 100) {
  console.log('Очень много')
}  else {
  console.log('Ok!')
}

// 3
num < 49 ? console.log('Error') : num > 100 ? console.log('Очень много') : console.log('Ok')

//4
switch (num) {
  case 49:
    console.log("Неверно!");
    break;
  case 50:
    console.log("Верно");
    break;
  default:
    console.log('Не сегодня');
    break; 
}*/

///////////////////////////////////////////// 14 Циклы

// let num = 50;

// // while (num <= 55) {
// //   console.log(num);
// //   num++;
// // }

// // do {
// //   console.log(num);
// //   num++;
// // }
// // while (num <= 55);

// for (let i = 1; i < 11; i++) {
//     if (i === 5) {
//     continue;
//   }
//   console.log(i)
// }

///////////////////////////////////////////// Функции, стрелочные функции

// const year = 2021;
// const myBirthDay = 1989;
// const myYear = +prompt('Сколько Вам лет?');
// const day = +prompt('Число когда Вы родились?');
// const month = prompt('Какой месяц рождения?');

// function calcYear () {
//   resultYear = year - myYear;
//   resultDay = day;
//   resultMonth = month;

//   alert(`Ваша дата рождения: ${resultDay} ${resultMonth}а в ${resultYear} году`)
// }

// calcYear();

/* Методы и свойства чисел */

// const str = 10;
// const arr = [1, 5, 10, 2, 11];

// 19 Колбэк функции

// function first() {
//   setTimeout(function() {
//     console.log(1);
//   }, 500)
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//   console.log(`Я учу: ${lang}`)
//   callback();
// }

// function done() {
//   console.log("Я прошел этот урок!");
// }

// learnJS('JavaSript', done);

///////////////////////////////////////////// 20 Объекты, деструктуризация объектов

// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     background: 'red'
//   },
//   makeTest: function() {
//     console.log('Test');
//   }
// };

// options.makeTest();

// console.log(options.colors.border);
// console.log(options['colors']['border'])
// delete options.name;
// console.log(options)

// let counter = 0;

// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//     }
//   } else {
//       console.log(`Свойство ${key} имеет значение ${options[key]}`);
//       counter++
//   }
// }

// console.log(counter);

// const personaInfo = {
//   firstName: 'Dmytro',
//   lastName: 'Danylov',
//   from: {
//     city: 'Kyiv',
//     street: 'Boholubova',
//     house: 40,
//   },
//   age: 32,
//   eye: 'blue',
//   girlFriend: 'Anya',
//   girlFriendFrom: {
//     city: 'Minsk',
//     country: 'Belarus',
//     age: '25',
//   },
//   country: 'Ukraine',
//   year: '2021',
//   showMeGirlFriend: function() {
//     console.log(personaInfo.girlFriendFrom)
//   }
// }

// const button = document.querySelector('.btn');
// const buttonDelete = document.querySelector('.btn-delete')

// const showMePersonalInfo = () => {
//   alert(JSON.stringify(personaInfo, null, 2))
// }

// const deleteGirlFriendFrom = () => {
//   delete(personaInfo.girlFriendFrom)
// }

// button.addEventListener('click', function() {
//   showMePersonalInfo();
// })
// buttonDelete.addEventListener('click', function() {
//   deleteGirlFriendFrom();
// })

/////////////////////////////////////////////21 Массивы и псевдомассивы

// const newArray = [25, 12, 3, 6, 8];
// newArray.sort(compareNum);

// function compareNum (a, b) {
//   return a - b;
// }

// const str = prompt('');
// const product = str.split(', ');
// product.sort();
// console.log(product.join('; '));

// newArray.forEach(function(item, counter, newArray) {
//   console.log(`${counter}: ${item} внутри массива ${newArray}`)
// })

// console.log(newArray.length);

// newArray.pop();
// newArray.push(1120)

// for (let i = 0; i < newArray.length; i ++) {
//   console.log(newArray[i])
// }

// for (let value of newArray) {
//   console.log(value)
// }

///////////////////////////////////////////// 22 Передача по ссылке или по значению, Spread оператор (ES6-ES9)

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b)

// const obj = {
//   a: 5,
//   b: 1
// }

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy (mainObj) {
//   let objCopy = {};
//   let key;
//   for (key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }

//   return objCopy;
// };

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4
//   }
// };

// const  newNumbers = copy(numbers)

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// const add = {
//   d: 17,
//   e: 20
// };

// const newArray = Object.assign(numbers, add);

// console.log(JSON.stringify(newArray, null, 2))

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice()

// newArray[1] = 'dasdasda';

// console.log(newArray)
// console.log(oldArray)

// const video = ['youtube', 'twich', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(JSON.stringify(internet, null, 2));

// function log (a, b, c) {
//   console.log(a)
//   console.log(b)
//   console.log(c)
// }

// const num = [2, 5, 7];

// log(...num)

// const array = ['a', 'b'];

// const newArr = [...array];

// const q = {
//   one: 1,
//   two: 2,
//   three: 3
// }

// const newObj = {...q};

// console.log(JSON.stringify(newObj, null, 2))

////////////////////////////////////////////////////////////////////////////////////////// 23 ООП

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3])

// const soldier = {
//   health: 400,
//   armor: 100,
//   sayHello: function() {
//     console.log('hello')
//   }
// };

// const john = Object.create(soldier);
// john.sayHello();

// const bmw = {
//   color: 'black',
//   price: 1800,
//   netto: 2,
//   openDors: function() {
//     console.log('DORS OPEN')
//   }
// }

// const lada = {
//   from: 'Ukraine'
// }

// const newCar = Object.setPrototypeOf(lada, bmw);

// newCar.openDors();

////////////////////////////////////////////////////////////////////// 26. Динамическая типизация в JS

//////// STRING
// 1)
// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// // 2) 
// console.log(typeof(5 + ''));

// const num = 5;

// console.log('https://vk.com/catalog/' + num);

// const fontSize = 26 + 'px';

// console.log(fontSize)

// //////// NUMBER
// // 1)
// console.log(typeof(Number('4')));

// // 2)
// console.log(typeof(+'5'));

// // 3)
// console.log(typeof(parseInt('15px', 10)))

// let answ = + prompt('Hello', '');

//////// To Boolean
//1)

// 0, '', null, undefined, NaN; --> FALSE 
                        // OTHER --> TRUE

// 1)
// let switcher;

// if (switcher) {
//   console.log('Working..');
// }

// // 2)

// console.log(typeof(Boolean('4')));

// // 3)

// console.log(typeof(!!'4444'))

//////////////////////// 27 ЗАДАЧКИ С СОБЕСЕДОВАНИЙ

// console.log(2 && 1 && null && 0 && undefined);
// /// И всегда запинается на лжи
// /// ИЛИ запинается на правде
// //                    3
// console.log(null || 2 && 3 || 4)

// console.log('Ежик' > 'яблоко')

//////////////////////// 28 Получение элементов со страницы

// const button = document.getElementById('button');
// const buttons = document.getElementsByTagName('button');

// console.log(button)

// console.log(buttons[0])