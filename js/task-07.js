const inputControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputControlEl.addEventListener('input', onInputFontSizeChange);


function onInputFontSizeChange() {
  textEl.style.fontSize = `${inputControlEl.value}px`;
};
