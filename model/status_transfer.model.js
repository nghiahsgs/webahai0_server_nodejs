var mongoose=require("mongoose");
var Schema=mongoose.Schema;

//create Schema
var status_transferSchema=new Schema({
	
	text:{
		type:String,
		require:true
	}

})

//create model
var status_transferModel=mongoose.model("status_transfer",status_transferSchema);

module.exports=status_transferModel;