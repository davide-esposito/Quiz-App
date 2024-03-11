// Question-Card-Erstellen

function createQuestionCard(question, answer, tags) {
    // Container für die neue Fragekarte
    const section = document.createElement("section");
    const article = document.createElement("article");
    article.className = "question-card";
  
    // Container für Frage und Button
    const divContainer = document.createElement("div");
  
    // Lesezeichen-Button
    const bookmarkButton = document.createElement("button");
    bookmarkButton.className = "bookmark";
    bookmarkButton.innerHTML = '<i class="far fa-bookmark"></i>';
  
    // Frage-Text
    const questionText = document.createElement("h2");
    questionText.textContent = question;
  
    // Antwort-Button
    const answerButton = document.createElement("button");
    answerButton.className = "button";
    answerButton.textContent = "Show Answer";
    // Event-Listener für Antwort-Button
    answerButton.addEventListener("click", () => {
      alert("Answer: " + answer);
    });
  
    // Tags-Container
    const tagsContainer = document.createElement("div");
    tagsContainer.className = "tags";
    tags.split(",").forEach((tag) => {
      const span = document.createElement("span");
      span.className = "tag";
      span.textContent = tag.trim();
      tagsContainer.appendChild(span);
    });
  
    // Zusammenbauen und Hinzufügen zum DOM
    divContainer.appendChild(questionText);
    divContainer.appendChild(answerButton);
    article.appendChild(bookmarkButton);
    article.appendChild(divContainer);
    article.appendChild(tagsContainer);
    section.appendChild(article);
  
    // Hinzufügen der gesamten Section zum Hauptcontainer
    document.querySelector("main").appendChild(section);
  }
  
  // Funktion zum Erstellen einer neuen Fragekarte aufrufen
  document.addEventListener("DOMContentLoaded", (event) => {
    document
      .getElementById("newQuestionForm")
      .addEventListener("submit", function (e) {
        e.preventDefault();
  
        // Holt die Werte aus dem Formular
        const question = document.getElementById("questionInput").value;
        const answer = document.getElementById("answerInput").value;
        const tags = document.getElementById("tagsInput").value;
  
        // Ruft die Funktion zum Erstellen der Fragekarte auf
        createQuestionCard(question, answer, tags);
  
        // Setzt das Formular zurück
        this.reset();
      });
  });