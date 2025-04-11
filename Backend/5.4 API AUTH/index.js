import express, { response } from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "Hassan";
const yourPassword = "1111";
const yourAPIKey = "062843f3-b20b-4462-9bde-0fa48aefdb03";
const yourBearerToken = "29177e78-599f-44ee-a5c4-47bf03189d9e";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    //TODO 2: Use axios to hit up the /random endpoint
    const response = await axios.get(
      "https://secrets-api.appbrewery.com/random"
    );
    //The data you get back should be sent to the ejs file as "content"
    const result = response.data;
    // const final_result = json.parse(result);
    //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
    console.log(result);
    const final_result = JSON.stringify(result);
    res.render("index.ejs", { data: final_result });
  } catch (error) {
    console.error("Failed to make request, ", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  try {
    const response = await axios.get(
      "https://secrets-api.appbrewery.com/all?page=2",
      {
        auth: {
          username: yourUsername,
          password: yourPassword,
        },
      }
    );
    const final_result = JSON.stringify(response.data);
    res.render("index.ejs", {
      data: final_result,
    });
  } catch (error) {
    console.error("Failed to make request ", error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //
  //HINT: You need to provide a query parameter of apiKey in the request.
  try {
    const response = await axios.get(
      `https://secrets-api.appbrewery.com/filter?score=5&apiKey=${yourAPIKey}`
    );
    const final_result = JSON.stringify(response.data);
    res.render("index.ejs", { data: final_result });
  } catch (error) {
    console.error("Failed to make request, ", error.message);
  }
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
  try {
    const result = await axios.get(
      "https://secrets-api.appbrewery.com/secrets/1",
      {
        headers: {
          Authorization: `Bearer ${yourBearerToken}`,
        },
      }
    );
    const final_data = JSON.stringify(response.data);
    res.render("index.ejs", { data: final_data });
  } catch (error) {
    console.error("Failed to make request ", error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
