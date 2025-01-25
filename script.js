const counterDisplay = document.querySelector('h3');
let counter = 0;
let interval = setInterval(() => {
    counterDisplay.textContent = counter;
});