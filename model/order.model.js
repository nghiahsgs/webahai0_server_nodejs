var mongoose=require("mongoose");
var Schema=mongoose.Schema;

//create Schema
var orderSchema=new Schema({
	status:{
		type: Schema.Types.ObjectId,
		ref:"status",
		require:true
	},
	status_transfer:{
		type: Schema.Types.ObjectId,
		ref:"status_transfer",
		require:true
	},
	address:{
		type:String,
		require:true
	},
	address_in_hanoi:{
		type:Boolean,
		require:true
	},
	phone:{
		type:String,
		require:true
	},
	note:{
		type:String,
		require:true
	},
	total:{
		type:Number,
		require:true
	},
	customer:{
		type: Schema.Types.ObjectId,
		ref:"customer",
		require:true
	},
	user:{
		type: Schema.Types.ObjectId,
		ref:"user",
		require:true
	},
	order_details:[
		{
			product:{
				type:Schema.Types.ObjectId,
				ref:"product"
			},
			quantity:Number
		}
	],
	create_at:{
		type:Date,
		default:Date.now
	},

})

//create model
var orderModel=mongoose.model("order",orderSchema);

module.exports=orderModel;