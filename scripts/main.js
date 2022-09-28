let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Java和JavaScript的关系2.jpg") {
    myImage.setAttribute("src", "images/Java和JavaScript的关系1.jpg");
  } else {
    myImage.setAttribute("src", "images/Java和JavaScript的关系2.jpg");
  }
};
function showAnswer1() {
  var x = document.getElementById("A1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function showAnswer2() {
  var x = document.getElementById("A2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function showAnswer3() {
  var x = document.getElementById("A3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function showAnswer4() {
  var x = document.getElementById("A4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
document.getElementById("Q5").addEventListener("click", function () {
  alert("呜呜(┬┬﹏┬┬)");
});
function showAnswerby(answer) {
  var x = document.getElementById(answer);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
