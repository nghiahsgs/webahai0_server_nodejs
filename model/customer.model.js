var mongoose=require("mongoose");
var Schema=mongoose.Schema;

//create Schema
var customerSchema=new Schema({
	
	fullname:{
		type:String,
		require:true
	},
	address:{
		type:String,
		require:true
	},
	phone:{
		type:String,
		require:true
	},
	user:{
		type: Schema.Types.ObjectId,
		ref:"user",
		require:true
	}

})

//create model
var customerModel=mongoose.model("customer",customerSchema);

module.exports=customerModel;