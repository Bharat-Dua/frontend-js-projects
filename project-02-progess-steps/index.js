let circles = document.querySelectorAll(".circle");
let progress = document.querySelector("#progress");
let prevBtn = document.querySelector("#prev");
let nextBtn = document.querySelector("#next");

let currentStep = 0;
nextBtn.addEventListener("click", function () {
  if (currentStep < circles.length) {
    currentStep++;
    updateSteps();
  }
});

prevBtn.addEventListener("click", function () {
  if (currentStep >= 1) {
    currentStep--;
    updateSteps();
  }
});

function updateSteps() {
  circles.forEach((circle, idx) => {
    if (idx < currentStep) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  let totalCircles = circles.length;

  if (currentStep === 0) {
    progress.style.width = "0%";
  } else {
    let percentage = ((currentStep - 1) / (totalCircles - 1)) * 100;
    progress.style.width = `${percentage}%`;
  }

  prevBtn.disabled = currentStep === 0;
  nextBtn.disabled = currentStep === totalCircles;
}

updateSteps();
