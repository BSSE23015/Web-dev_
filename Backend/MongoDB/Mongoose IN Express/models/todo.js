import mongoose from "mongoose";
const TodoSchema = mongoose.Schema({
  title: String,
  desc: String,
  isDone: Boolean,
});

const Todo = mongoose.model("Todo", TodoSchema);
export default Todo;
