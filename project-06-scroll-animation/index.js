const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxPosition);

checkBoxPosition();

function checkBoxPosition() {
  const triggerBottomOfBox = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottomOfBox) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
