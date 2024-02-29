// Bookmarks-Button
const bookmarkBtns = document.querySelectorAll(`.bookmark`);

bookmarkBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const icon = btn.querySelector("i");
        if (icon.classList.contains("far")) {
            icon.classList.add("orange-icon");
        } else {
            icon.classList.remove("orange-icon");
        }
        icon.classList.toggle("far");
        icon.classList.toggle("fas");
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