const counterDisplay = document.querySelector('h3');
let counter = 0;
const bubble = document.createElement('span');
bubble.classList.add('bubble');
document.body.appendChild(bubble);
// console.log(Math.random()*12 + 100 + 'px');

const size =`${Math.random()*200 + 100}px`;

bubble.style.width = size;
bubble.style.height = size;

console.log(size);