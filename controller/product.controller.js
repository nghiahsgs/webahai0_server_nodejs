var express=require("express");
var router=express.Router();


//load model
productModel=require("../model/product.model");


router.get("/",async function(req,res){
	try{
		var users=await productModel.find(req.query)
		//console.log(users);
		res.send(users)
	}catch(err){}
	
})

router.post("/",async function(req,res){
	//input
	/*
	{
	"name":"product1",
	"quantity":10
	}
	*/

	var product=new productModel(req.body)
	product=await product.save()
	res.send(product)
})

router.put("/:id",async function(req,res){
	try{
		var product=await productModel.findOne({_id:req.params.id});	
	}catch(err){
		res.status(400).send(err.message);
		return;
	}
	
	product.name=req.body.name;
	product.quantity=req.body.quantity;
	

	product=await product.save()
	res.send(product)
})

router.delete("/:id",async function(req,res){
	
	try{
		var product=await productModel.findOne({_id:req.params.id});
	}catch(err){
		res.status(400).send(err.message);
		return;
	}
	product=await product.remove()
	res.send(product)
})


module.exports=router;