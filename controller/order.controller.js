var express=require("express");
var router=express.Router();
//load model
orderModel=require("../model/order.model");


router.get("/",async function(req,res){
	// var userId=req.query.user;
	// var customerId=req.query.customer;
	
	// try{
	// 	if(userId&&customerId){
	// 		var orders=await orderModel.find({user:userId,customer:customerId}).populate("user");	
	// 	}else if(userId&&customerId){
	// 		var orders=await orderModel.find({user:userId}).populate("user");	
	// 	}else if(userId&&customerId){
	// 		var orders=await orderModel.find({customer:customerId}).populate("user");	
	// 	}else{
	// 		var orders=await orderModel.find({}).populate("user");	
	// 	}
	// }catch(err){
	// 	res.send(err.message);
	// }
	
	// //var orders=await orderModel.find({}).populate("status").populate("status_transfer").populate("customer").populate("user");	

	// res.send(orders)

	try{
		var users=await orderModel.find(req.query)
		//console.log(users);
		res.send(users)
	}catch(err){}
	
})



router.post("/",async function(req,res){

	//input
	/*
		{
		"status":"5cdb85ae2a402e623d9fd0a4",
		"status_transfer":"5cdb85ce2a402e623d9fd0a6",
		"address":"thanh xuan  nguyen trai ha noi",
		"address_in_hanoi":true,
		"phone":"0232333",
		"note":"giao hang nhanh nhe em",
		"total":"100000",
		"customer":"5ccfa3c28e822a0ed97a867a",
		"user":"5cda1daa39dc4b4cbb831474",
		"order_details"	:[
			{
				"product":"5cdb85e72a402e623d9fd0a9",
				"quantity":4
			},
			{
				"product":"5cdb85ed2a402e623d9fd0aa",
				"quantity":14
			}
		]
		}
	*/

	var order=new orderModel(req.body)
	order=await order.save()
	res.send(order)
})

router.put("/:id",async function(req,res){
	try{
		var order=await orderModel.findOne({_id:req.params.id});
	}catch(err){
		res.status(400).send(err.message);
		return;
	}
	
	order.status=req.body.status;
	order.status_transfer=req.body.status_transfer;
	order.address=req.body.address;
	order.address_in_hanoi=req.body.address_in_hanoi;
	order.phone=req.body.phone;
	order.note=req.body.note;
	order.total=req.body.total;
	order.customer=req.body.customer;
	order.user=req.body.user;
	order.order_details=req.body.order_details;



	
	try{
		order=await order.save()	
	}catch(err){
		res.status(400).send(err.message);
		return;
	}
	
	res.send(order)
})


router.delete("/:id",async function(req,res){
	
	try{
		var order=await orderModel.findOne({_id:req.params.id});
	}catch(err){
		res.status(400).send(err.message);
		return;
	}

	order=await order.remove()
	res.send(order)
})

module.exports=router;