// 修改部分QWQ
let myImage = document.querySelector("img");
let button1 = document.getElementById("Q1");
let button2 = document.getElementById("Q2");
let button3 = document.getElementById("Q3");
let button4 = document.getElementById("Q4");
let button5 = document.getElementById("Q5");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let c1 = document.getElementById("c1");
let a1 = document.getElementById("a1");
const questions = ["Java和JavaScript的关系","长者的名言是什么","open the door of coding","世界一流退学","别碰我QWQ"];
button1.textContent = questions[0];
button2.textContent = questions[1];
button3.textContent = questions[2];
button4.textContent = questions[3];
button5.textContent = questions[4];
p1.textContent = "可以点击图片哦😇"
p2.textContent = "too young,too simple,sometime naive"
p3.textContent = ">>> print(\"hello world!\") \n hello world!"
a1.textContent = "www.世界一流退学.com"
//修改部分末QWQ

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
