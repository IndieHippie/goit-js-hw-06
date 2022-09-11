const controlsElem = document.querySelector("#controls");
console.log(controlsElem);

const boxesElem = document.querySelector("#boxes");
console.log(boxesElem);

const btnCreate = document.querySelector("[data-create]");
console.log(btnCreate);

const btnDestroy = document.querySelector("[data-destroy]");

const inputElem = document.querySelector("input");
console.log(inputElem);

btnCreate.addEventListener("click", handleCreateClick);
btnDestroy.addEventListener("click", destroyBoxes);

function handleCreateClick() {
  // debugger
  const amount = inputElem.value;
  createBoxes(amount);
}

let size = 30;

function createBoxes(amount) {
  for (let i = 0; i < Number(amount); i += 1) {
    console.log(i);
    const createdBox = document.createElement("div");
    boxesElem.append(createdBox);

    // const size = i * 10;

    // createdBox.style.height = `${30 + size}px`;
    // createdBox.style.width = `${30 + size}px`;

    createdBox.style.height = `${size}px`;
    createdBox.style.width = `${size}px`;

    size += 10;

    const randomColor = getRandomHexColor();
    createdBox.style.backgroundColor = randomColor;
  }
}

function destroyBoxes() {
  boxesElem.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
