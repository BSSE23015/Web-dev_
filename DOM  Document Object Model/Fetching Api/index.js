const URL = "https://meowfacts.herokuapp.com/";
const fact = document.querySelector("#fact");
const getAPI = async () => {
  console.log("Fetching Data....");
  let promise = await fetch(URL);
  console.log(promise); //JSON format
  let data = await promise.json(); //second response
  fact.innerText = data;
  console.log(data);
};
