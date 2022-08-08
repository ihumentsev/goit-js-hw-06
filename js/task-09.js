function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
console.log(body);
const btnEl = document.querySelector(".change-color");
console.log(btnEl);
const spanEl = document.querySelector(".color");
console.log(spanEl);

btnEl.addEventListener("click", (event) => {
  console.log(event.currentTarget.value);
  body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = body.style.backgroundColor;
});
