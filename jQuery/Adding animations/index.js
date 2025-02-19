// $("button").on("click", () => {
//   $("h1").slideUp();//adds slide up animation to h1
// });
// $("button").on("click", () => {
//   $("h1").slideToggle(); //toggles btw slideUp and slideDown animation
// });
// $("button").on("click", () => {
//   $("h1").animate({ margin: 20 });//adds animation of adding margin 20px
// });
// $("button").on("click", () => {
//   $("h1").animate({ margin: "30%" }); //if we add percentage we have to add it in commas bcz we can add only numeric values properties like margin padding etc not color bcz it is string property
// });
//we can chain animations to add more than one animations
$("button").on("click", () => {
  $("h1").slideUp().slideDown().animate({ margin: 30 }); //adds slideup then slidedown and then margin of 30px
});
