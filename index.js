///////////////////////////////////////////// 12. Практика, ч.1. Начинаем создавать приложение =============

"use strict";

// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//   while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//   }
// }

// start();

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", "");
//     const b = prompt("На сколько оцените его?", "");

//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log("done");
//     } else {
//       console.log("error");
//       i--;
//     }
//   }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
//   } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
//   } else {
//     console.log("Произошла ошибка");
//   }
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//   }
// }

// writeYourGenres();

// for (let key in personalMovieDB) {
//   console.log(`База данных имеет свойства ${key}`);
// }

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
