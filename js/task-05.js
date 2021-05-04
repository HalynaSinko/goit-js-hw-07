const refs = {
    input: document.querySelector("#name-input"),
    nameGuest: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value === ''){
      return (refs.nameGuest.textContent = 'незнакомец');
    };
    return refs.nameGuest.textContent = event.currentTarget.value;
};







// const input = document.querySelector("#name-input");
// const nameGuest = document.querySelector('#name-output');

// console.log(refs.input);