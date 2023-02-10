class AboutController{
    static about = (req,res)=>{
        res.render('admin/about/about.ejs')
    }
}
module.exports = AboutController