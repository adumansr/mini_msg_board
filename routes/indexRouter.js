const { Router } = require("express");
const formRouter = require("./newMsgRouter");

const indexRouter = Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
indexRouter.get("/", formRouter);

indexRouter.post("/new", (req, res) => {
  const data = req.body;
  messages.push({
    text: data.messageText,
    user: data.authorsName,
    added: new Date(),
  });
  res.redirect("/");
});

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

module.exports = { indexRouter };
