const os = require("os");

console.log("OS", os.platform());
console.log("OS arch", os.arch());
console.log("Proc", os.cpus());
console.log("Free memory", os.freemem());
console.log("Total memory", os.totalmem());
console.log("Home dir", os.homedir());
