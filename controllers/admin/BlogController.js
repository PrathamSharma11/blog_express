const cloudinary = require('cloudinary').v2;
const { findById } = require('../../models/Blog')
const BlogModel = require('../../models/Blog')

cloudinary.config({ 
    cloud_name: 'daevddhla', 
    api_key: '697434874533515', 
    api_secret: 'ThyuyCix0JcZ8KBDSBXpk_eaBB0',
    
  });







class BlogController{
    static blogdisplay = async (req,res)=>{
        const data = await BlogModel.find().sort({_id:-1})
        //console.log(data)
        res.render('admin/blog/blogdisplay',{d:data})
    }
    static bloginsert = async(req,res)=>{
        //console.log('hello')
        //console.log(req.body)
        //console.log(req.files)
        const imagefile = req.files.blogimage
        const image_upload = await cloudinary.uploader.upload(imagefile.tempFilePath,{
            folder:'blogimage',
            width:400,
        })
        try{
            const result = new BlogModel({
                title:req.body.title,
                description:req.body.description,
                image:image_upload.secure_url
            })
            await result.save()
            res.redirect('/admin/blogdisplay')

        }catch(err){
             console.log(err)
        }
    }
    static blogview = async(req,res)=>{
        //console.log(req.params.id)   //view ki id call kr rhe h with the help of param
        try{
            const result = await BlogModel.findById(req.params.id)
            //console.log(result)
            res.render('admin/blog/blogview',{d:result})

        }catch(err){
            console.log(err)
        }
    }
    
    static blogedit = async(req,res)=>{
        //console.log(req.params.id)
        try{
            const result = await BlogModel.findById(req.params.id)
            res.render('admin/blog/blogedit',{d:result})

        }catch(err){
          console.log(error)
        }

    }
    static blogupdate = async(req,res)=>{
        try{
            // console.log(req.params.id)
            // console.log(req.body)
            const result = await BlogModel.findByIdAndUpdate(req.params.id,{
                title:req.body.title,
                description:req.body.description
            })
            await result.save()
            res.redirect('/admin/blogdisplay')

        }catch(err){
            console.log(err)
        }
    }
    static blogdelete = async(req,res) =>{
        try{
            const result = await BlogModel.findByIdAndDelete(req.params.id)
            res.redirect('/admin/blogdisplay')

            

        }catch(err){
          console.log(err)
        }
    }

}
module.exports = BlogController