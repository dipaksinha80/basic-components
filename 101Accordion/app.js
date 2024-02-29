const queBox = document.querySelector(".question-box");
const ansBox = document.querySelector(".answer-box");
queBox.addEventListener("click", function () {
  if (ansBox.style.display === "block") {
    ansBox.style.display = "none";
  } else {
    ansBox.style.display = "block";
  }
});
