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
    <button aria-label="Show answer of Question" class="showAnswerBtn">
      Show Answer
    </button>
    <div class="answer hidden">
      ${answer}
    </div>
    <button class="hideAnswerBtn hidden">Hide Answer</button>
  </div>
  <div class="tags">
    <span aria-label="tag" class="tag">#${tag}</span>
  </div>
</article>`;

  document.querySelector("main").appendChild(section);
});
