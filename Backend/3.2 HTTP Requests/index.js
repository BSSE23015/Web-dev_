import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello.</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>About me</h1>");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Phone Number</h1><p>+9202022112</p>");
});
app.listen(port, () => {
  console.log(`Running Server port ${port}`);
});
