const mongoose= require("mongoose")

const authSchema=mongoose.Schema({
    name:{type:String,required: true},
    email:{type:String, required:true, unique: true },
    pass:{type:String, required:true},
    age: {type:Number, required:true},
},{
    versionKey:false
})

const AuthModel= mongoose.model("auth",authSchema)

module.exports={
    AuthModel
}