module.exports = function (req, res, ok) {
	console.log("hello it working")
	if(req.body.authorize == true){
		return ok();
	}

	else{
		res.json(403,{sucess:false,data:"sorry no authorize"})
		// res.view('admin/login',{'error':"please login first"});
		return;
	}
};