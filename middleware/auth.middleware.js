var userModel=require("../model/user.model");

module.exports.requireAuth=async function(req,res,next){
	if(!req.cookies){
		res.redirect("/login")
		return;
	}
	var userId=req.cookies.userId; //neu da login => trong cookie co userId
	if(!userId){
		res.redirect("/login")
		return;
	}

	try{
		var user=await userModel.findOne({_id:userId});	
		res.locals.user=user;
		next();
	}catch(err){
		res.redirect("/login");
		return;
	}
}


module.exports.requireAuthAdmin=async function(req,res,next){
	if(res.locals.user.isAdmin){
		next();
	}else{
		res.redirect("/dashboard");
	}
}

// module.exports.requireAuthAdmin=function(req,res,next){
// 	//authAdmin de xu ly
// 	//meu ko phai admin thi cu vao se bi day ra
// 	//la admin ms dc thong qua

// 	//=> /login de set cookie for user

// 	//console.log(req.cookies)
// 	if(!req.cookies){
// 		res.redirect("/")
// 		return;
// 	}
// 	var userId=req.cookies.userId;
// 	//console.log(userId);
// 	if(!userId){
// 		res.redirect("/")
// 		return;
// 	}

// 	//console.log("userId",userId)
// 	userModel.findOne({_id:userId},function(err,user){
// 		//console.log(user);
// 		//console.log(user);
// 		if(user===null){
// 			res.redirect("/")
// 			return;
// 		}else{
// 			if(user.isAdmin==="True"){
// 				res.locals.user=user;
// 				next();
// 			}else{
// 				res.redirect("/")
// 			}
			
// 		}

// 	})
// }