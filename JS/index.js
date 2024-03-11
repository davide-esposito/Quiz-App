// Back-to-Top-Button
const backToTopBtn = document.querySelector(".back-to-top");

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});