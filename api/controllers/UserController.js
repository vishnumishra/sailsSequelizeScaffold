/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
// 	create:function(req,res,next){
// 		try{
// 			var params = req.body;
// 			User.create(params).then(function(data){
// 				res.json({sucess:true,data:data});
// 			}).catch(function(err){
// 				res.json({sucess:false,err:err});
// 			})
// 		}catch(err){
// 			res.json({sucess:false,err:err});
// 		}
// 	},
// 	update:function(req,res,next){
// 		try{
// 			var params = req.body;
// 			var id = params.id;
// 			User.update(params,{"where":{"id":id},returning:true})
// 			.then(function(result){
// 				res.json({sucess:true,result:result});
// 			}).catch(function(err){
// 				res.json({sucess:false,err:err.message});
// 			})
// 		}catch(err){
// 			res.json({sucess:false,err:err});			
// 		}
// 	},
// 	find:function(req,res){
// 		try{
// 			var params = req.body;
// 			User.findAll(params).then(function(result){
// 				result = (result == null)?[]:result;
// 				res.json({sucess:true,result:result})
// 			}).catch(function(err){
// 				res.json({sucess:false,err:err.message});
// 			})
// 		}catch(err){
// 			res.json({sucess:false,err:err});			
// 		}
// 	},
// 	destroy:function(req,res,next){
// 		try{
// 			var id = req.body.id;
// 			User.destroy({"where":{"id":id}}).then(function(result){
// 				res.json({sucess:true,result:result})
// 			}).catch(function(err){
// 				res.json({sucess:false,err:err.message});
// 			})
// 		}catch(err){
// 			res.json({sucess:false,err:err});			
// 		}
// 	},
	// login:function(req,rodds  = evens.map(function (v) { return v + 1; });es,next){
	// 	if(req.body.name=="test"){
	// 		return res.redirect("/mypage")
	// 	}else{
	// 	res.json(500,{sucess:false})			
	// 	}
	// }

	ecma6Test:function(req,res,next){
		var evens =req.body.evens
		odds  = evens.map(v => v + 1);
		
		res.ok({sucess:true,'odds':odds});
	}
};

