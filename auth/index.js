require("dotenv").config()
const express = require("express");
const PORT= process.env.PORT || 8080
const { connection } = require("./config/db");
const { authenticate } = require("./middlewares/authenticate");
const { noteRouter } = require("./routes/Note.route");
const { userRouter } = require("./routes/User.route");
const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.use("/users",userRouter);
app.use(authenticate)
app.use("/notes",noteRouter)

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
  console.log(`server running at ${PORT}`);
});
