const URL = "https://meowfacts.herokuapp.com/";

const getAPI = async () => {
  console.log("Fetching Data....");
  let promise = await fetch(URL);
  console.log(promise.status);
  console.log("Data is fetched successfully.");
};
