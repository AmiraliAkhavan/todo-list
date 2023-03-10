const express = require("express");
// const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config({ path: "env" });

app.use(express.json());

const PORT = process.env.PORT || 5500;

app.use(cors());

const TodoItemRoute = require("./routes/routeItems");

app.use("/", TodoItemRoute);

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => console.log("Server connected"));
  })
  .catch((err) => console.log(err));
