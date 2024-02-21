const bookmarkBtns = document.querySelectorAll(`.bookmark`);

console.log(bookmarkBtns);

bookmarkBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("bookmarked");
        btn.textContent = btn.classList.contains('bookmarked') ? '✅' : '☑️';
    });
});