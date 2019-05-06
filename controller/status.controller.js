var express=require("express");
var router=express.Router();


//load model
statusModel=require("../model/status.model");


router.get("/",async function(req,res){
	var statuss=await statusModel.find();
	//console.log(statuss);
	res.send(statuss);
	
})

router.post("/",async function(req,res){
	//input
	/*
	{
	"text":"status1",
	}
	*/

	var status=new statusModel(req.body)
	status=await status.save()
	res.send(status)
})

router.put("/:id",async function(req,res){
	try{
		var status=await statusModel.findOne({_id:req.params.id});	
	}catch(err){
		res.status(400).send(err.message);
		return;
	}
	
	status.text=req.body.text;
	
	status=await status.save()
	res.send(status)
})

router.delete("/:id",async function(req,res){
	
	try{
		var status=await statusModel.findOne({_id:req.params.id});
	}catch(err){
		res.status(400).send(err.message);
		return;
	}
	status=await status.remove()
	res.send(status)
})


module.exports=router;