const BlogModel = require('../models/Blog')
const AdminModel = require('../models/Admin')
const ContactModel = require('../models/Contact')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


class FrontController{
    static home = async(req,res)=>{
        const data  = await BlogModel.find().sort({_id:-1}).limit(6)
        //res.send("hello home")
        res.render('home',{d:data})
    }
    static about = (req,res)=>{
        res.render('about')
    }
    static contact = (req,res)=>{
        res.render('contact')
    }
    static blog = async(req,res)=>{
        const bloglist = await BlogModel.find()
        res.render('blog',{b:bloglist})
    }
    

    static blogdetail = async(req,res)=>{
        try{
            const result = await BlogModel.findById(req.params.id)
            //console.log(result)
            res.render('blogdetail',{r:result})

        }
        catch(err){
            console.log(err)
        }
    }

    //admin login
    static login = (req,res)=>{
        res.render('login',{message:req.flash("success"),message1:req.flash("error")});
    }
    static adminregistration = async(req,res)=>{
        res.render('registration',{message:req.flash('error')})
    }
    static admininsert = async(req,res)=>{
        try{ 
            // console.log(req.body)
            const{name,email,password}= req.body
            const admin = await AdminModel.findOne({email:email})
            if (admin){
                req.flash('error','email already exist')
                res.redirect('/adminregistration')
            }
            else{
                if(name && email && password ){
                    try{
                        const hashpassword = await bcrypt.hash(password,10)
                        const result = new AdminModel({
                            name:name,
                            email:email,
                            password:hashpassword
                        })
                        await result.save();
                        req.flash('success','Now You Can Login')
                        res.redirect('/login')


                    }catch(err){
                        console.log(err)
                    }

                }else{
                    
                    res.redirect('/adminregistration')
                }
            }
            

        }catch(err){
            console.log(err)
        }
    }
    static contactinsert = async(req,res)=>{
        try{
            const result = new ContactModel({
                name:req.body.name,
                email:req.body.email,
                phone:req.body.phone,

                
               })
               await result.save()
               res.redirect('/')


        }catch(err){
            console.log(err)
        }
    }
    static contactdisplay = async(req,res)=>{
        const data = await ContactModel.find()
        //console.log(data)
        res.render('admin/contactdisplay',{d:data})
    }
    static verifylogin = async(req,res)=>{
        try{
            //console.log(req.body)
            const {email,password} = req.body
            
                const admin = await AdminModel.findOne({email:email})
                if(admin!=null){

                    const isMatch = await bcrypt.compare(password,admin.password)
                    if((admin.email==email)&& isMatch){
                        //const token = jwt.sign({ id:admin._id }, 'secretkey'); //token generating
                        //res.cookie('token',token)
                        res.redirect('/admin/dashboard')
                    }
                else{
                        req.flash('error','email or password does not matched')
                        res.redirect('/login')
                    }

                }else{
                    req.flash('error','First get Registered Yourself')
                    res.redirect('/adminregistration')
                }
            

        }catch(err){
            console.log(error)
        }
    }


    static logout = async(req,res)=>{
        try{
            res.clearCookie('token')
            res.redirect('/login')

        }catch(err){
            console.log(err)
        }
    }



}
module.exports = FrontController