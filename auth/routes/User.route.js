const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config()
const secret_key= process.env.SECRET_KEY
const { AuthModel } = require("../models/User.model");
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { email, pass, age, name } = req.body;
  try {
    bcrypt.hash(pass, 5, async (err, secure_password) => {
      if (err) {
        console.log(err);
      } else {
        const user = new AuthModel({ email, pass: secure_password, age, name });
        await user.save();
        res.send("User Registered");
      }
    });
  } catch (err) {
    res.send("Error in Registering the user");
    console.log(err);
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    let user = await AuthModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(pass, user[0].pass, (err, result) => {
        if (result) {
          const token = jwt.sign({userID: user[0]._id}, secret_key);  //send userid as payload 
          res.send({ msg: "Login Successful", token: token });
        } else {
          {
            res.send("Wrong Credentials");
          }
        }
      });
    } else {
      res.send("Wrong Credentials");
    }
  } catch (err) {
    res.send("Error in Login");
    console.log(err);
  }
});


module.exports={userRouter}