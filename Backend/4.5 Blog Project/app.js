import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

let blogs = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { blogs: blogs });
});

app.get("/blog", (req, res) => {
  res.render("blog.ejs");
});

app.get("/new_Blog", (req, res) => {
  res.render("new_blog.ejs", { blogs: blogs });
});

app.get("/blog_form", (req, res) => {
  res.render("blog_form.ejs", { blogs: blogs });
});

app.get("/blog/:id", (req, res) => {
  const blogId = parseInt(req.params.id); // Get the blog index from URL
  if (blogId >= 0 && blogId < blogs.length) {
    res.render("blogDetails", { blog: blogs[blogId] });
  } else {
    res.status(404).send("Blog not found");
  }
});

app.post("/submit", (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  console.log(title);
  console.log(description);
  blogs.push({ title: title, description: description });
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
