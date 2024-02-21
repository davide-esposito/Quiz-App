// Bookmarks-Button
const bookmarkBtns = document.querySelectorAll(`.bookmark`);

console.log(bookmarkBtns);

bookmarkBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("bookmarked");
        btn.textContent = btn.classList.contains('bookmarked') ? '✅' : '☑️';
    });
});

// Back-to-Top-Button
const backToTopBtn = document.querySelector(".back-to-top");

console.log(backToTopBtn);

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});