const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();
const userRouter = require("./route/user.route");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use("/", userRouter);

mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  app.listen(PORT, () => {
    console.log("Hello");
  }),
  console.log("db connected")
);
