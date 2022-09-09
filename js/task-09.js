function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyElem = document.querySelector("body");
console.log(bodyElem);

const colorElem = document.querySelector(".color");
console.log(colorElem);
const changeColorElem = document.querySelector(".change-color");
console.log(changeColorElem);


changeColorElem.addEventListener("click", changeBgColorRandom);

function changeBgColorRandom() {
  bodyElem.style.backgroundColor = getRandomHexColor();
  colorElem.textContent = getRandomHexColor();
};

