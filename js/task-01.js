const navEl = document.querySelector("#categories");
console.log("Number of categories:", navEl.children.length);
const ulItem = document.querySelectorAll(".item");

const items = ulItem.forEach((element) => {
  console.log("Category:", element.children[0].textContent);
  console.log("Elements:", element.children[1].children.length);
});
