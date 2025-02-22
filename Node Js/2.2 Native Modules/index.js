const fs = require("fs");
fs.writeFile("message.txt", "Hello from Hassan.", (err) => {
  if (err) throw err;

  console.log("The file has been saved.");
});
