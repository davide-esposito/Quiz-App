
// Dark-Mode
document
  .querySelector('[data-js="dark-button"]')
  .addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });
