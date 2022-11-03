
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector('.change-color');
const textcolorRef = document.querySelector('.color');
buttonRef.addEventListener('click', () => {
  let colorRef = getRandomHexColor()
  document.body.style.backgroundColor = colorRef;
  textcolorRef.textContent = colorRef;
})

