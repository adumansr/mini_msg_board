const express = require("express");

const path = require("node:path");
const formRouter = require("./routes/newMsgRouter");
const { indexRouter } = require("./routes/indexRouter");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/", formRouter);
app.use("/", indexRouter);

app.listen(3000);
