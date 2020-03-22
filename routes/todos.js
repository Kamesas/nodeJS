const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Todo list",
    isIndex: true
  });
});

router.get("/create", (req, res) => {
  res.render("create", {
    title: "Create page",
    isCreate: true
  });
});

module.exports = router;
