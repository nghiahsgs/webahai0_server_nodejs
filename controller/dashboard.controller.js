var express=require("express");
var router=express.Router();


//load model
userModel=require("../model/user.model");


router.get("/",function(req,res){
	//tra ve thong tin user
	res.send(res.locals.user)
})


module.exports=router;