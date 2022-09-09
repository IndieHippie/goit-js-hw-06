
const input = document.querySelector("#validation-input");
console.log(input);
const inputLength = input.getAttribute('data-length');
console.log(inputLength);

input.addEventListener("blur", (event) => {
    const isValid = event.currentTarget.value.length === Number(inputLength);

    if (isValid) {
        event.currentTarget.classList.add("valid");
        event.currentTarget.classList.remove("invalid");
    } else {
        event.currentTarget.classList.remove("valid");
        event.currentTarget.classList.add("invalid");
    }
})

