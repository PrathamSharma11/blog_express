const mongoose = require('mongoose')

///creating schema
const categorySchema =new mongoose.Schema({
    catname:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
},{timestamps:true})

//creating collection
const CategoryModel= mongoose.model('category',categorySchema)
module.exports = CategoryModel