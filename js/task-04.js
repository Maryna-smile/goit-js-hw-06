const counterValueRef = document.querySelector('#value');
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

decrementBtnRef.addEventListener('click', () => {
    counterValue -= 1;
    counterValueRef.textContent = counterValue;
});

incrementBtnRef.addEventListener('click', () => {
    counterValue += 1;
    counterValueRef.textContent = counterValue;
});

console.log(counterValue.textContent);
