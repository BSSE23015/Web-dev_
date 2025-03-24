import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
var numLetters = 0;
app.get("/", (req, res) => {
  res.render("index.ejs", { numLetters });
});

app.post("/submit", (req, res) => {
  numLetters = req.body["fname"].length + req.body["lname"].length;
  res.render("index.ejs", { numLetters });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
