var mongoose=require("mongoose");
var Schema=mongoose.Schema;

//create Schema
var productSchema=new Schema({
	
	name:{
		type:String,
		require:true
	},
	quantity:{
		type:Number,
		require:true
	}

})

//create model
var productModel=mongoose.model("product",productSchema);

module.exports=productModel;