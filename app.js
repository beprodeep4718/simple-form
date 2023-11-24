//^ Pakages --->
const express = require("express");
const app = express();
const path = require('path');
const hbs = require('hbs');
const connect = require("./db/connect");
const Product = require("./models/product");

//! Paths ---> 
const publicPath = "./public";

//? PORT ---->
const port = process.env.PORT || 3000;

//* Middlewire --->
app.use(express.json());
app.use(express.urlencoded({extended:false}));//for data encryption

app.use(express.static(publicPath));
app.set("view engine", "hbs");

//& Code --->

app.get("/", (req, res) => {
  res.render("index");
});
app.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const user = new Product({
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email
    });
    await user.save();
    res.status(201).render("success");
  } catch (error) {
    console.log(error);
    res.status(400).send("not found");
  }
});

//^ listning to PORT & Database ----->
const start = () => {
  try {
    connect();
    app.listen(port, () => {
      console.log(`Listning to port ${port}.....`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
