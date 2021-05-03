const inputAmountEl = document.getElementsByTagName('input')[0];
const createButtonEl = document.querySelector('[data-action="render"]');
const clearButtonEl = document.querySelector('[data-action="destroy"]');
const boxesEl = document.querySelector('#boxes');

// console.log(inputAmountEl);

createButtonEl.addEventListener('click', onCreateButton);
clearButtonEl.addEventListener('click', onClearButton);

const startSize = 30;

function onCreateButton() {
  let amount = +inputAmountEl.value;
  const arrayBoxes = [];

    for (let i = 0; i < amount; i += 1) {
      const box = document.createElement('div');
      box.style.backgroundColor = makeColor();
      box.style.width = `${startSize + i * 10}px`;
      box.style.height = `${startSize + i * 10}px`;
      
      arrayBoxes.push(box);
    }
  
  boxesEl.append(...arrayBoxes);
  // console.dir(boxesEl);
}

// console.log();

function onClearButton() {
  boxesEl.innerHTML = '';
  inputAmountEl.value = 0;
}

function getRandomNumber(min, max) {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Включаючи мінімум та максимум
}

function makeColor() {
  const r = getRandomNumber(0, 255);
  const g = getRandomNumber(0, 255);
  const b = getRandomNumber(0, 255);
  return `rgb(${r},${g},${b})`;
}

// console.log(makeColor());
