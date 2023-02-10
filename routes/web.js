const express = require('express')
const router = express.Router()
const AdminController = require('../controllers/admin/AdminController')
const AboutController = require('../controllers/admin/AboutController')
const BlogController = require('../controllers/admin/BlogController')
const CategoryController = require('../controllers/admin/CategoryController')
const FrontController = require('../controllers/FrontController')
const admin_auth = require('../middleware/auth')
// const ContactController = require('../controllers/ContactController')


//Front Controller routes
router.get('/',FrontController.home)
router.get('/about',FrontController.about)
router.get('/contact',FrontController.contact)
router.get('/blog',FrontController.blog)
router.get('/login',FrontController.login)
router.get('/blogdetail/:id',FrontController.blogdetail)
router.get('/adminregistration',FrontController.adminregistration)
router.post('/adminregistration2',FrontController.admininsert)
router.post('/contactinsert',FrontController.contactinsert)
router.post('/verify_login',FrontController.verifylogin)
router.get('/logout',FrontController.logout)




//admin controller routes
router.get('/admin/dashboard',AdminController.dashboard)

//admin blog display route
router.get('/admin/blogdisplay',BlogController.blogdisplay)
router.post('/bloginsert',BlogController.bloginsert)
router.get('/admin/blogview/:id',BlogController.blogview)
router.get('/admin/blogedit/:id',BlogController.blogedit)
router.post('/blogupdate/:id',BlogController.blogupdate)
router.get('/admin/blogdelete/:id',BlogController.blogdelete)

//admin category route
router.get('/admin/category',CategoryController.categorydisplay)
router.post('/categoryinsert',CategoryController.categoryinsert)
router.get('/admin/categoryview/:id',CategoryController.categoryview)
router.get('/admin/categorydelete/:id',CategoryController.categorydelete)
router.get('/admin/categoryedit/:id',CategoryController.categoryedit)
router.post('/categoryupdate/:id',CategoryController.Categoryupdate)



//admin contact route
router.get('/admin/contactdisplay',FrontController.contactdisplay)


//admin about route
router.get('/admin/about',AboutController.about)




module.exports = router