// function hello() {
//   console.log("hello");
// }
// console.log("one");
// console.log("two");
// setTimeout(() => {
//   console.log("Hello");
// }, 4000);
// console.log("three");
// console.log("four");
function getData(dataID, getNextData) {
  //2s
  setTimeout(() => {
    console.log("data", dataID);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
} 
//nested callbacks
//callback hell problem
getData(1, () => {
  //calback arrow function
  getData(2, () => {
    //callback arrow function
    getData(3);
  });
});
