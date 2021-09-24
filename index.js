//12. Практика, ч.1. Начинаем создавать приложение =============

// const text = document.querySelector('.text')
// const filmNumber = 10;
// const filmNumberTwo = 30;
// const numberOfFils = +prompt("Сколько фильмов вы уже посмотрели?");
// const personalMovieDB = {
//   count: numberOfFils,
//   movies: {},
//   actors: {
//     myFavorite: ''
//   },
//   genres: [],
//   privat: false,
// };

// for (let i = 0; i < 1; i++) {
//   const one = prompt("Один из первых просмотренных фильмов?")
//   const two = prompt("Насколько оцените его?")

//   if (one != null && two != null && one != '' && two != '' && one.length < 50 ) {
//     personalMovieDB.movies[one] = two;
//     text.innerHTML = 'DONE';
//   } else {
//     text.innerHTML = 'ERROR';
//     i--;
//   }

//   if (personalMovieDB.count < filmNumber) {
//     text.innerHTML = "Просмотрено довольно мало фильмов";
//   } else if (
//     personalMovieDB.count > filmNumber &&
//     personalMovieDB.count <= filmNumberTwo
//   ) {
//     text.innerHTML = "Вы классический зритель";
//   } else if (
//     personalMovieDB.count > filmNumberTwo
//   ) {
//     text.innerHTML = "Вы киноман!";
//     alert(JSON.stringify(personalMovieDB, null, 2))
//   }
        
// }



// 13 условия

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

// 14 Циклы

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

// Функции, стрелочные функции


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
