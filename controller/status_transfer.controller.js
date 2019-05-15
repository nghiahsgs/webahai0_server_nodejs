var express=require("express");
var router=express.Router();


//load model
status_transferModel=require("../model/status_transfer.model");


router.get("/",async function(req,res){
	try{
		var users=await status_transferModel.find(req.query)
		//console.log(users);
		res.send(users)
	}catch(err){}
	
})

router.post("/",async function(req,res){
	//input
	/*
	{
	"text":"status_transfer1",
	}
	*/

	var status_transfer=new status_transferModel(req.body)
	status_transfer=await status_transfer.save()
	res.send(status_transfer)
})

router.put("/:id",async function(req,res){
	try{
		var status_transfer=await status_transferModel.findOne({_id:req.params.id});	
	}catch(err){
		res.status_transfer(400).send(err.message);
		return;
	}
	
	status_transfer.text=req.body.text;
	
	status_transfer=await status_transfer.save()
	res.send(status_transfer)
})

router.delete("/:id",async function(req,res){
	
	try{
		var status_transfer=await status_transferModel.findOne({_id:req.params.id});
	}catch(err){
		res.status_transfer(400).send(err.message);
		return;
	}
	status_transfer=await status_transfer.remove()
	res.send(status_transfer)
})


module.exports=router;