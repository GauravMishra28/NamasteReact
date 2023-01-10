const express = require("express");
const { connection } = require("./config/db");
const { AuthModel } = require("./models/User.model");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.post("/registration",(req,res)=>{
    const payload= req.body
    try{
    const user= new AuthModel(payload)
    user.save()
    res.send("User Registered")
    }
    catch(err){
        res.send("Error in Registering the user")
        console.log(err)
    }
  
})

app.post("/login",(req,res)=>{
    const {email,pass}=req.body
    try{
        let user= AuthModel.findOne({email,pass})
        if(user.length>0)
        {
            res.send("Login Successful")
        }
    }
    catch(err){
        res.send("Error in Login")
        console.log(err)
    }
    

  
})

app.get("/about",(req,res)=>{
    res.send("About page")
})


app.get("/contacts",(req,res)=>{
    res.send("Contacts page")
})



app.listen(4500, async() => {
  try {
    await connection;
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
  console.log("server running at port 4500");
});
