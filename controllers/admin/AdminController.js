class AdminController{
    static dashboard = (req,res)=>{
        
        try{
            //const {name,email} = req.admin
            res.render('admin/dashboard')                 
        }catch(err){
            console.log(err)
        }

    }
}
module.exports = AdminController

//,{n:name,e:email}