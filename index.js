// Bookmarks-Button
const bookmarkBtns = document.querySelectorAll(`.bookmark`);

bookmarkBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("bookmarked");
        btn.textContent = btn.classList.contains('bookmarked') ? '✅' : '☑️';
    });
});


// Dark-Mode
document.querySelector('[data-js="dark-button"]').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});


// Back-to-Top-Button
const backToTopBtn = document.querySelector(".back-to-top");

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});