const mongoose = require('mongoose')

///creating schema
const blogSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
    
    
},{timestamps:true})

//creating collection
const BlogModel= mongoose.model('blog',blogSchema)
module.exports = BlogModel