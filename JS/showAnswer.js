const questionCards = document.querySelectorAll(".question-card");

questionCards.forEach((card) => {
  const showAnswerBtn = card.querySelector(".showAnswerBtn");
  const hideAnswerBtn = card.querySelector(".hideAnswerBtn");
  const answer = card.querySelector(".answer");

  showAnswerBtn.addEventListener("click", () => {
    answer.classList.toggle("hidden");
    hideAnswerBtn.classList.toggle("hidden");
    showAnswerBtn.classList.toggle("hidden");
  });

  hideAnswerBtn.addEventListener("click", () => {
    answer.classList.toggle("hidden");
    hideAnswerBtn.classList.toggle("hidden");
    showAnswerBtn.classList.toggle("hidden");
  });
});
