for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    activeButton(buttonInnerHtml);
  });
}
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  activeButton(event.key);
});
function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    default:
      console.log(buttonInnerHtml);
      break;
  }
}
function activeButton(currentKey) {
  var active_Button = document.querySelector("." + currentKey);
  active_Button.classList.add("pressed");
  setTimeout(() => {
    active_Button.classList.remove("pressed");
  }, 150);
}
