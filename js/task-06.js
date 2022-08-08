const validInput = document.querySelector("#validation-input");

validInput.addEventListener("blur", (event) => {
  console.log(event.currentTarget.value.length);
  if (
    validInput.getAttribute("data-length") > event.currentTarget.value.length
  ) {
    validInput.classList.add("invalid");
  } else {
    validInput.classList.remove("invalid");
    validInput.classList.add("valid");
  }
});
