import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let blogs = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/blog", (req, res) => {
  res.render("blog.ejs");
});

app.get("/newBlog", (req, res) => {
  res.render("new_blog.ejs");
});

app.post("/submit", (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  console.log(title);
  console.log(description);
  blogs.push({ title: title, description: description });
  res.redirect("/blog");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
