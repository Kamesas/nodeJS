const express = require("express");
const mongoos = require("mongoose");
const exphbs = require("express-handlebars");
const path = require("path");
const todoRoutes = require("./routes/todos");

const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs"
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(todoRoutes);

const start = async () => {
  try {
    await mongoos.connect(
      "mongodb+srv://kamesas:1955sasanika208@cluster0-bmegw.mongodb.net/todos",
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      }
    );

    app.listen(PORT, () => {
      console.log("working...");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
