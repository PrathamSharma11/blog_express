const cloudinary = require('cloudinary').v2;
const { findById } = require('../../models/Category')
const CategoryModel = require('../../models/Category')


cloudinary.config({ 
    cloud_name: 'daevddhla', 
    api_key: '697434874533515', 
    api_secret: 'ThyuyCix0JcZ8KBDSBXpk_eaBB0',
    
  });













class CategoryController{
    static categorydisplay = async (req,res)=>{
           const data = await CategoryModel.find()
        res.render('admin/category/categorydisplay',{d:data})
    }








    static categoryinsert = async(req,res)=>{
        //console.log("hello")
        //console.log(req.body)
        const imagefile = req.files.catimage
        const image_upload = await cloudinary.uploader.upload(imagefile.tempFilePath,{
            folder:'catimage',
            width:400,
        })





       try{
           const result = new CategoryModel({
            catname:req.body.catname,
            image:image_upload.secure_url
           })
           await result.save()
           res.redirect('/admin/category')

       }
       catch(err){
        console.log(err)
       } 

    }
    static categoryview = async(req,res)=>{
        try{
            const result = await CategoryModel.findById(req.params.id)
            //console.log(result)
            res.render('admin/category/categoryview',{d:result})

        }catch(err){
            console.log(err)
        }

    }
    static categorydelete = async(req,res)=>{
        try{
            const result = await CategoryModel.findByIdAndDelete(req.params.id)
            res.redirect('/admin/category')

        }catch(err){
            console.log(err)
        }
    }
    static categoryedit = async(req,res)=>{
        //console.log(req.params.id)
        try{
            const result = await CategoryModel.findById(req.params.id)
            res.render('admin/category/categoryedit',{d:result})

        }catch(err){
          console.log(error)
        }

    }
    static Categoryupdate = async(req,res)=>{
        try{
            // console.log(req.params.id)
            // console.log(req.body)
            const result = await CategoryModel.findByIdAndUpdate(req.params.id,{
                catname:req.body.catname,
                
            })
            await result.save()
            res.redirect('/admin/category')

        }catch(err){
            console.log(err)
        }
    }
}
module.exports=CategoryController