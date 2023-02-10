const express = require('express')

const connectDB = require('./db/connectdb.js')
const app  = express()
const port = 3000
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
app.use(cookieParser())
const fileUpload = require("express-fileupload");
const cloudinary = require('cloudinary');
var session = require('express-session')
var flash = require('connect-flash');
const router = require('./routes/web')







app.use(fileUpload({useTempFiles: true}));


//mongo db connection
connectDB()


//static file -path
app.use(express.static('public'))


//setup EJS
app.set('view engine','ejs')

//body-parser
app.use(bodyParser.urlencoded({extended:false}))


//message
app.use(session({
  secret:'secret',
  cookie:{maxAge:6000},
  resave:false,
  saveUninitialized:false,


}));
app.use(flash());

//linking routes
app.use('/',router)











// app.get('/career', (req, res) => {
//     res.send('Career Page')
//   })






//server create
app.listen(port, () => {
    console.log(`server is running localhost ${port}`)
  })