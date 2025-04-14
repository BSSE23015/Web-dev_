import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const API_URL = "http://api.weatherstack.com/current";
const api_key = "b588cfcfa0f2f0ffb8c64c77b8132ec3";
const port = 3000;

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  res.render("index.ejs", { content: "" });
});

app.post("/give", async (req, res) => {
  try {
    const result = axios.get(
      API_URL + "?access_key=" + api_key + "&query=" + req.body.city
    );
    const final = (await result).data;
    console.log(final);
    res.render("index.ejs", { content: final });
  } catch (error) {
    console.error("API Error:", error.message);
    res.render("index", { content: null });
  }
});
//listen to port 3000.
app.listen(port, () => {
  console.log(`Listening to ${port}.`);
});
