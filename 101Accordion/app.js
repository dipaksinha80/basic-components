var queBox = document.getElementsByClassName("question-box");
var i;
for (i = 0; i < queBox.length; i++) {
  queBox[i].addEventListener("click", function () {
    this.classList.toggle("active");
    // this ansBox doesn't target anything it is just targeting the nextElementSibling
    var ansBox = this.nextElementSibling;
    if (ansBox.style.display === "block") {
      ansBox.style.display = "none";
    } else {
      ansBox.style.display = "block";
    }
    
    //for applying animation we added this

    if (ansBox.style.maxHeight) {
      ansBox.style.maxHeight = null;
    } else {
      ansBox.style.maxHeight = ansBox.scrollHeight + "px";
    }
  });
}

// const queBox = document.querySelector(".question-box");
// const ansBox = document.querySelector(".answer-box");
// queBox.addEventListener("click", function () {
//   if (ansBox.style.display === "block") {
//     ansBox.style.display = "none";
//   } else {
//     ansBox.style.display = "block";
//   }
// });
