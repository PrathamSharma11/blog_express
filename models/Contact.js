const mongoose = require('mongoose')

///creating schema
const contactSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
},{timestamps:true})

//creating collection
const ContactModel= mongoose.model('contact',contactSchema)
module.exports = ContactModel