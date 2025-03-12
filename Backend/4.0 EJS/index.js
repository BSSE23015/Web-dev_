import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const d = new Date();
  let day = d.getDay();
  console.log(day);
  let daytype = "a weekday";
  let advice = "its time for hardwork";
  if (day === 0 || day === 6) {
    daytype = "a weekend";
    advice = " its time for relaxation.";
  }
  res.render("index.ejs", {
    daytype,
    advice,
  });
});
app.listen(port, () => {
  console.log(`listening to port ${port}.`);
});
