//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
var allowed = false;
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;
var password = "";
function checker(req, res, next) {
  password = req.body["password"];
  if (password === "ILoveProgramming") {
    allowed = true;
  }
  next();
}
app.use(checker);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (allowed===true) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});
app.listen(port, () => {
  console.log("Listening port:", port);
});
