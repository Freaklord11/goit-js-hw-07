function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  const body = document.body;
  const colorSpan = document.querySelector('.color');

  const newColor = getRandomHexColor();

  // Change background color
  body.style.backgroundColor = newColor;

  // Update span with the new color
  colorSpan.textContent = newColor;
}

document.addEventListener('DOMContentLoaded', function () {
  const changeColorBtn = document.querySelector('.change-color');
  changeColorBtn.addEventListener('click', changeColor);
});