const path = require("path");

console.log("name file", path.basename(__filename));
console.log("name folder", path.basename(__dirname));
console.log("name file ext", path.extname(__filename));

console.log("parse", path.parse(__filename));

console.log(path.join(__dirname, "public", "index.html"));
