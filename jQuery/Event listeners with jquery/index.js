$("h1").addClass("big-title");
//click event in javascript
// for (var i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", () => {
//     document.querySelector("h1").style.color = "purple";
//   });
// }
//click event listener in jQuery
$("button").click(() => {
  $("h1").css("color", "purple");
});
//keypress event listener in jQuery
$(document).keypress((event) => {
  $("h1").text(event.key);
});
