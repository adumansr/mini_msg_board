const { Router } = require("express");
const path = require("node:path");

const formRouter = Router();

formRouter.get("/new", (req, res) => {
  res.render("form");
});

module.exports = formRouter;
