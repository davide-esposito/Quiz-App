// Bookmarks-Button
const bookmarkBtns = document.querySelectorAll(`.bookmark`);

bookmarkBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const icon = btn.querySelector("i");
    icon.classList.toggle("far");
    icon.classList.toggle("fas");
  });
});
