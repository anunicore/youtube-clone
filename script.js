let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Missed something";
});

window.addEventListener("focus", () => {
  document.title = docTitle;
});
