// const fs = require("fs");
// fs.writeFile("message.txt", "Hello from Hassan.", (err) => {
//   if (err) throw err;

//   console.log("The file has been saved.");
// });

const f2s = require("fs");
f2s.readFile("./message.txt", (err, data) => {
  if (err) throw err;
  console.log(data);
});
