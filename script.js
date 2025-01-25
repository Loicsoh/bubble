const counterDisplay = document.querySelector('h3');
let counter = 0;
const bubble = document.createElement('span');
bubble.classList.add('bubble');
document.body.appendChild(bubble);

// console.log(Math.random()*12 + 100 + 'px');

const size =`${Math.random()*100 + 100}px`;

bubble.style.width = size;
bubble.style.height = size;

// console.log(size);

bubble.style.top = Math.random()*100 + 50 + '%';
bubble.style.left = Math.random()*100 + '%';

const plusminus = Math.random() > 0.5 ? 1 : -1;
console.log(plusminus); // 1 ou -1
bubble.style.setProperty('--left', Math.random()*100 *plusminus + '%');