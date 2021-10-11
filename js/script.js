/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1
const imageBlocks = document.querySelectorAll('img');
imageBlocks.forEach(item => {
  item.remove();
})

// 2
const genre = document.querySelector('.promo__genre');
genre.innerHTML = 'ДРАМА';

// 3
const mainBg = document.querySelector('.promo__bg');
mainBg.style.backgroundImage = 'url("img/bg.jpg")';

// 4

const filmsList = document.querySelector('.promo__interactive-list');
filmsList.innerHTML = '';
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
  filmsList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
      <div class="delete"></div>
    </li>
  `;
})

///////////// 31 Обработчик событий
// let i = 0;
const button = document.querySelector('.add button');

const deleteElement = (e) => {
  console.log('delete')
  // i++;
  // if (i == 1) {
  //   button.removeEventListener("click", deleteElement);
  // }
}

button.addEventListener('click', deleteElement, {once: true}); // === Выполняется 1 раз (или без этого выше в функции циклом)
