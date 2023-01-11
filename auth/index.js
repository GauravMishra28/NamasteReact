const express = require("express");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/User.route");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});


app.use("/users",userRouter)

app.listen(4500, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
  console.log("server running at port 4500");
});
