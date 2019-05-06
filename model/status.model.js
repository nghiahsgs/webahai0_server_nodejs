var mongoose=require("mongoose");
var Schema=mongoose.Schema;

//create Schema
var statusSchema=new Schema({
	
	text:{
		type:String,
		require:true
	}

})

//create model
var statusModel=mongoose.model("status",statusSchema);

module.exports=statusModel;