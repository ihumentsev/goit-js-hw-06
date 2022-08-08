const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
console.log(spanEl);

inputEl.addEventListener("input", (event) => {
  spanEl.textContent = event.currentTarget.value;
});
