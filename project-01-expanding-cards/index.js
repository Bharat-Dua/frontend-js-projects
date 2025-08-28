const cards = document.querySelectorAll(".card");
console.log(cards);

cards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    cards.forEach((c) => c.classList.remove("active"));
    card.classList.add("active");
  });
  card.addEventListener("mouseleave", function () {
    card.classList.remove("active");
  });
});
