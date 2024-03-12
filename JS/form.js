document.getElementById("questionInput").addEventListener("input", (event) => {
  const remaining = 160 - event.target.value.length;
  document.getElementById(
    "questionRemaining"
  ).textContent = `${remaining} characters left`;
});

document.getElementById("answerInput").addEventListener("input", (event) => {
  const remaining = 160 - event.target.value.length;
  document.getElementById(
    "answerRemaining"
  ).textContent = `${remaining} characters left`;
});

const newQuestionForm = document.getElementById("newQuestionForm");
newQuestionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const question = document.getElementById("questionInput").value;
  const answer = document.getElementById("answerInput").value;
  const tag = document.getElementById("tagsInput").value;

  const section = document.createElement("section");
  section.innerHTML = `
      <article class="question-card">
        <button aria-label="Bookmark this question" class="bookmark">
          <i class="far fa-bookmark"></i>
        </button>
        <div>
          <h2>${question}</h2>
          <button aria-label="Toggle answer visibility" class="toggleAnswerBtn">
            Show Answer
          </button>
          <div class="answer hidden">${answer}</div>
        </div>
        <div class="tags">
          <span aria-label="tag" class="tag">#${tag}</span>
        </div>
      </article>
    `;

  const toggleAnswerBtn = section.querySelector(".toggleAnswerBtn");
  const answerDiv = section.querySelector(".answer");
  toggleAnswerBtn.addEventListener("click", () => {
    const isHidden = answerDiv.classList.toggle("hidden");
    toggleAnswerBtn.textContent = isHidden ? "Show Answer" : "Hide Answer";
  });

  const bookmarkBtn = section.querySelector(".bookmark");
  bookmarkBtn.addEventListener("click", () => {
    const icon = bookmarkBtn.querySelector("i");
    icon.classList.toggle("far");
    icon.classList.toggle("fas");
  });

  document.querySelector("main").appendChild(section);

  newQuestionForm.reset();
});
