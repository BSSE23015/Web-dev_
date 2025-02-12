// // function hello() {
// //   console.log("hello");
// // }
// // console.log("one");
// // console.log("two");
// // setTimeout(() => {
// //   console.log("Hello");
// // }, 4000);
// // console.log("three");
// // console.log("four");
// // function getData(dataID, getNextData) {
// //   //2s
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       console.log("data", dataID);
// //       //   resolve("success");
// //       reject("error");
// //       if (getNextData) {
// //         getNextData();
// //       }
// //     }, 5000);
// //   });
// // }
// //nested callbacks
// //callback hell problem
// // getData(1, () => {
// //   //calback arrow function
// //   getData(2, () => {
// //     //callback arrow function
// //     getData(3);
// //   });
// // // });
// // const getPromise=()=>{
// //   return new Promise((resolve,reject)=>{
// //     console.log("I am a Promise.");
// //     // resolve("success");
// //     reject("failed");
// //   })
// // }
// // let promise=getPromise();
// // promise.then((res)=>{
// //   console.log("promise fullfilled",res);
// // })
// // let error=promise.catch((err)=>{
// //   console.log("error",err);
// // })

// function asynFunction1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(" data1");
//       resolve("successfully fetched data1");
//     }, 4000);
//   });
// }
// function asynFunction2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(" data2");
//       resolve("successfully fetched data2");
//     }, 4000);
//   });
// }
// console.log("fetching data1...");
// let p1 = asynFunction1();
// p1.then((res) => {
//   console.log(res);
//   console.log("fetching data2...");
//   let p2 = asynFunction2();
//   p2.then((res) => {
//     console.log(res);
//   });
// });

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve("weather api");
    }, 3000);
  });
}
async function getWeatherData() {
  await api();
  await api();
}
