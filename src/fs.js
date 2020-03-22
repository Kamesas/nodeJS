const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, "fsMadeFolder"), err => {
//   if (err) {
//     throw err;
//   }

//   console.log("It's work ! Made Folder");
// });

const filePath = path.join(__dirname, "fsMadeFolder", "fsMadeFile.js");
// fs.writeFile(filePath, "Hello from new made fsFile ! #2", err => {
//   if (err) {
//     throw err;
//   }

//   console.log("created and wrote");
// });

// fs.appendFile(filePath, "Hello from new made fsFile ! #3", err => {
//   if (err) {
//     throw err;
//   }

//   console.log("created and wrote");
// });

fs.readFile(filePath, (err, content) => {
  if (err) {
    throw err;
  }

  const data = Buffer.from(content);
  console.log(data.toString);
});
