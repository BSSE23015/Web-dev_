import express from "express";
import mongoose from "mongoose";
import Todo from "./models/todo.js";

const port = 3000;
const app = express();
const a = await mongoose.connect("mongodb://localhost:27017/Todo");

app.get("/", (req, res) => {
  const todo = new Todo({
    title: "Task 1 ",
    desc: "Description",
    isDone: false,
  });
  todo.save();
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("Server running on port : " + port);
});
