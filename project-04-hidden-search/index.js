const search = document.querySelector(".search");
const input = document.querySelector("#input-text");
const button = document.querySelector(".btn");

button.addEventListener("click", function (e) {
  e.stopPropagation();
  search.classList.toggle("active");
  input.focus();
});

// if user click outside the search
document.addEventListener("click", function (e) {
  if (!search.contains(e.target)) {
    search.classList.remove("active");
  }
});

// close the search using esc key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    search.classList.remove("active");
    input.blur();
    console.log("Escape key pressed");
  }
});
