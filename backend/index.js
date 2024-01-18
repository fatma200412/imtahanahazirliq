const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());
const mongoose = require("mongoose");

const dataScheman = mongoose.model(
  "test",
  new mongoose.Schema({
    id: String,
    name: String,
    price: Number,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products/", async (req, res) => {
  let allProduct = await dataScheman.find({});
  console.log(req.params.id);
  res.send({ message: "success", data: allProduct });
});

app.get("/products/:id", async (req, res) => {
  const id = req.params.id;
  let byid = await dataScheman.findById(id);
  console.log(byid);
  res.send({ message: "success", data: byid });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("mongodb connnected");
  })
  .catch((err) => {
    console.log("failed not connect");
  });
