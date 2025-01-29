function random_number() {
  var n = Math.random();
  n = n * 6;
  n = Math.floor(n) + 1;
  return n;
}
var n1 = random_number();
var n2 = random_number();
document
  .querySelector(".img1")
  .setAttribute("src", "./images/dice" + n1 + ".png");
document
  .querySelector(".img2")
  .setAttribute("src", "./images/dice" + n2 + ".png");
if (n1 > n2) {
  document.querySelector("h1").innerHTML = "🚩 Player1 Wins";
} else if (n2 > n1) {
  document.querySelector("h1").innerHTML = "🚩 Player2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
