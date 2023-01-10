const mongoose= require("mongoose")

mongoose.set('strictQuery', false);
const connection= mongoose.connect("mongodb://127.0.0.1:27017/nem101c2")
        
module.exports={connection}