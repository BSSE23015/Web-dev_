function hello() {
  console.log("hello");
}
console.log("one");
console.log("two");
setTimeout(() => {
  console.log("Hello");
}, 4000);
console.log("three");
console.log("four");
