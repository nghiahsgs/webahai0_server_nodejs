var express=require("express");
var router=express.Router();
//load model
customerModel=require("../model/customer.model");


router.get("/",async function(req,res){
	// var userId=req.query.user;
	// try{
	// 	if(userId){
	// 	var users=await customerModel.find({user:userId});	
	// 	}else{
	// 		var users=await customerModel.find();	
	// 	}	
	// }catch(err){
	// 	res.send(err.message);
	// }
	
	
	// let filters=Object.keys(req.query);
	// var objQuery={}
	// for(filter of filters){
	// 	let filterValue=req.query[filter];
	// 	objQuery[filter]=filterValue
	// }
	// console.log(objQuery)

	try{
		var users=await customerModel.find(req.query)
		//console.log(users);
		res.send(users)

	}catch(err){}
	

	// res.send(users)
})



router.post("/",async function(req,res){

	//input
	/*
	{
	"fullname":"ten day du cua khach hang 001",
	"address":"ha noi thanh xuan",
	"phone":"01234",
	"user":"5ccf9b33e10dc17c702415ca"
	}
	*/
	var customer=new customerModel(req.body)
	customer=await customer.save()
	res.send(customer)
})

router.put("/:id",async function(req,res){
	try{
		var customer=await customerModel.findOne({_id:req.params.id}).populate("user");	
	}catch(err){
		res.status(400).send(err.message);
		return;
	}
	
	customer.fullname=req.body.fullname;
	customer.address=req.body.address;
	customer.phone=req.body.phone;
	customer.user=req.body.user;
	
	try{
		customer=await customer.save()	
	}catch(err){
		res.status(400).send(err.message);
		return;
	}
	
	res.send(customer)
})


router.delete("/:id",async function(req,res){
	
	try{
		var customer=await customerModel.findOne({_id:req.params.id}).populate("user");	
	}catch(err){
		res.status(400).send(err.message);
		return;
	}

	customer=await customer.remove()
	res.send(customer)
})

module.exports=router;