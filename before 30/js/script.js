'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'yellow';
box.style.width = '100%';

box.style.cssText = 'background-color: green; width: 100px; height: 100px; border-radius: 50%;';

btns[1].style.borderRadius = '25px';

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
  item.style.backgroundColor = 'yellow';
})

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я')

div.classList.add('black');

wrapper.append(div);
// wrapper.prepend(div);

// hearts[0].before(div)
// hearts[0].after(div);

// circles[1].remove();

// circles[1].replaceWith(hearts[1]);

div.innerHTML = '<h1>Button</h1>'
// div.style.cssText = 'border-radius: 10px;'
// div.textContent = 'Hello';

div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>')