var express=require("express");
var router=express.Router();


//load model
userModel=require("../model/user.model");


router.get("/",async function(req,res){
	
	// let filter=Object.keys(req.query)[0];
	// let filterValue=req.query[filter];
	
	
	// var objQuery={}
	// objQuery[filter]=filterValue

	// var users=await userModel.find(objQuery)
	// //console.log(users);
	// res.send(users)


	try{
		var users=await userModel.find(req.query)
		//console.log(users);
		res.send(users)

	}catch(err){}
	
})

router.post("/",async function(req,res){
	//input
	/*
	{
	"fullname":"nguyen ba nghia",
	"username":"nghiahsgs",
	"password":"261997",
	"isAdmin":true
	}
	*/
	console.log(req.body)
	var user=new userModel(req.body)
	user=await user.save()
	res.send(user)
})

router.put("/:id",async function(req,res){
	try{
		var user=await userModel.findOne({_id:req.params.id});	
	}catch(err){
		res.status(400).send("nothing user found");
		return;
	}
	
	user.fullname=req.body.fullname;
	user.username=req.body.username;
	user.password=req.body.password;
	user.isAdmin=req.body.isAdmin;
	

	user=await user.save()
	res.send(user)
})

router.delete("/:id",async function(req,res){
	
	try{
		var user=await userModel.findOne({_id:req.params.id});
	}catch(err){
		res.status(400).send("nothing user found");
		return;
	}
	user=await user.remove()
	res.send(user)
})


module.exports=router;