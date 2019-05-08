var express=require("express");
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
require('pug')

var app=express();

// connect db
require("./db.js");

//set views
app.set('view engine', 'pug')
app.use(express.static('public'))
app.engine('pug', require('pug').__express)



//load middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
// var authMiddleware=require("./middleware/auth.middleware")

//import controller
var userController=require("./controller/user.controller");
// var loginController=require("./controller/login.controller");
// var dashboardController=require("./controller/dashboard.controller");
var customerController=require("./controller/customer.controller");

var orderController=require("./controller/order.controller");

var productController=require("./controller/product.controller");
var statusController=require("./controller/status.controller");
var status_transferController=require("./controller/status_transfer.controller");
// var postController=require("./controller/post.controller");

//routers
// app.use("/user",authMiddleware.requireAuth,authMiddleware.requireAuthAdmin,userController);
app.use("/api/users",userController);
// app.use("/post",postController);
// app.use("/login",loginController);
// app.use("/dashboard",loginController);
app.use("/api/customers",customerController);
app.use("/api/products",productController);
app.use("/api/statuss",statusController);
app.use("/api/status_transfers",status_transferController);
app.use("/api/orders",orderController);


var port=3000;
app.listen(3000,function(){
	console.log(`server on port ${port}`)
})


