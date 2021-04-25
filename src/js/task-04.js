let counterValue = 0;

const decrementButtonEl = document.querySelector("[data-action = 'decrement']");
const incrementButtonEl = document.querySelector("[data-action = 'increment']");
let valueOfCouterEl = document.querySelector('#value');


const onIncrementButtonClick = () => {
  counterValue += 1;
  valueOfCouterEl.textContent = counterValue;
};

const onDecrementButtonClick = () => {
  counterValue -= 1;
  valueOfCouterEl.textContent = counterValue;
};

incrementButtonEl.addEventListener('click', onIncrementButtonClick);
decrementButtonEl.addEventListener('click', onDecrementButtonClick);


// console.log(decrementButton);
// console.log(incrementButton);
// console.log(valueEl);