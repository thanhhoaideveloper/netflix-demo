const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const Router = require("./routers");

app.use(cors());
app.use(express.json());
Router(app);

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/netflix", {
    autoIndex: true,
  })
  .then(() => {
    console.log("Connect DB Successfully!");
  });

app.listen(5000, () => {
  console.log("Server started");
});
