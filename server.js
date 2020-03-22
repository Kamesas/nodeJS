const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath = url => {
  switch (url) {
    case "/":
      return path.join(__dirname, "public", "index.html");
    case "/contact":
      return path.join(__dirname, "public", "contact.html");
    case "/about":
      return path.join(__dirname, "public", "about.html");
    default:
      return path.join(__dirname, "public", "404.html");
  }
};

const contentType = extFile => {
  let contentType;

  switch (extFile) {
    case ".css":
      return (contentType = "text/css");
    case ".js":
      return (contentType = "text/javascript");
    default:
      return (contentType = "text/html");
  }
};

const server = http.createServer((req, res) => {
  let file = path.join(__dirname, "public", req.url);
  const ext = path.extname(file);
  console.log(contentType(ext));

  fs.readFile(filePath(req.url), (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, "public", "error.html"), (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end("Error");
        } else {
          res.writeHead(200, {
            "Content-Type": "text/html"
          });
          res.end(data);
        }
      });
    }

    res.writeHead(200, { "Content-Type": contentType(ext) });
    res.end(content);
  });

  // if (req.url === "/") {
  //   fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
  //     if (err) {
  //       throw err;
  //     }
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.end(data);
  //   });
  // } else if (req.url === "/about") {
  //   fs.readFile(path.join(__dirname, "public", "about.html"), (err, data) => {
  //     if (err) {
  //       throw err;
  //     }
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.end(data);
  //   });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("server working ...");
});
