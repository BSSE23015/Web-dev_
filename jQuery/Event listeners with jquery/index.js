$("h1").addClass("big-title");
//in javascript
// for (var i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", () => {
//     document.querySelector("h1").style.color = "purple";
//   });
// }
$("button").click(() => {
  $("h1").css("color", "purple");
});
