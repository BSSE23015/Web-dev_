import express from "express";
const d = new Date();
let day = d.getDay();
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.render("index.ejs", {
    daytype: "a weekday",
    advice: "its time for hardwork",
  });
});
app.listen(port, () => {
  console.log(`listening to port ${port}.`);
});
