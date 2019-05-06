var express=require("express");
var router=express.Router();


//load model
userModel=require("../model/user.model");


router.get("/",function(req,res){
	// res.send("form login")
	res.render("login");
})

router.post("/",async function(req,res){
	try{
		var user=await userModel.findOne({
			username:req.body.username,
			password:req.body.password
		});	
		
	}catch(err){
		console.log(err.message);
		res.redirect("/login")
	}
	console.log(user);
	
	if(user){
		//res.cookie("userId",user._id)
		//res.redirect("/dashboard")	
		console.log("login success");
	}else{
		console.log("login fail");
		//res.redirect("/login")
	}
	


	// userModel.findOne({
	// 	username:req.body.username,
	// 	pass:req.body.password
	// },function(err,user){
	// 	// console.log(req.body.username);
	// 	// console.log(req.body.password);

	// 	// console.log(err);
	// 	// console.log(password);
	// 	if(user===null){
	// 		//fail
	// 		res.render("user/login")
	// 	}else{
	// 		//console.log(user._id)
	// 		//console.log("set cookie success")
	// 		res.cookie("userId",user._id)
	// 		res.redirect("/user/dashboard")
	// 	}
	// })

})

module.exports=router;