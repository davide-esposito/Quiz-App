const bookmarkBtns = document.querySelectorAll(`.bookmark`);

console.log(bookmarkBtns);

bookmarkBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("bookmarked");
        if (btn.classList.contains("bookmarked")) {
            btn.textContent = "✅";
        } else {
            btn.textContent = "☑️";
        }
    });
});