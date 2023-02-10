const mongoose = require('mongoose')

///creating schema
const AdminSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

//creating collection
const AdminModel= mongoose.model('admin',AdminSchema)
module.exports = AdminModel