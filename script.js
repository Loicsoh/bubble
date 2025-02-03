const counterDisplay = document.querySelector('h3');
let counter = 0;


const bubblemaker = () =>{
    const bubble = document.createElement('span');
    
bubble.classList.add('bubble');
document.body.appendChild(bubble);

let size =`${Math.random()*200 + 100}px`;

bubble.style.width = size;
bubble.style.height = size;

// console.log(size);

bubble.style.top = Math.random()*100 + "%";
bubble.style.left = Math.random()*100 + "%";

const plusminus = Math.random() > 0.5 ? 1 : -1;
console.log(plusminus); // 1 ou -1
bubble.style.setProperty('--left', Math.random()*100 *plusminus + "%");

bubble.addEventListener('click', () => {
    counter ++;
    counterDisplay.textContent = counter;
    bubble.remove();
    });
}

setInterval(bubblemaker, 2000);
setTimeout(() => {
    bubble.remove();
}, 10000);
