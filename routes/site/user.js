var keystone = require('keystone');

// model
var User = keystone.list('User').model;

// 用户注册
exports.user_regist = function(req, res) {
	var name = req.body.name,
		email = req.body.email,
		password = req.body.password;

	new User({
		name: {first: 'guo', last: 'xb'},
		email: email,
		password: password,
		canAccessKeystone: true
	}).save(function(err, data){
		console.log(err)
		if (err) {
			res.send({status: 0, msg: '请求失败~'});
		}else{
			console.log('success')
			res.send({status: 1, data: data, msg: '请求成功~'});
		}
	});
	// res.send({status: 1, data: {name: name, age: age}, msg: '请求成功'});
	// var data = {accesstoken: token, datainfo: data_info};
	// http_tools.post('url', data, function(err, reData){
	// 	if(reData){
	// 		res.send(reData);
	// 	}else{
	// 		res.send({status:0, msg:'请求失败'});
	// 	}
	// });
}

// 删除用户
exports.user_delete = function(req, res) {
	var email = 'gxbxemail@163.com';//req.body.email;
	User.find({email: email}, function(err, arr){
		if (err) {
			res.send({status: 0, msg: '删除失败~'});
		}else{
			if (arr.length > 0) {
				for(var i = 0; i < arr.length; i ++){
					arr[i].remove(function(err){
						if (err) {
							res.send({status: 0, msg: '删除失败~'});
						}
					});
				}
				res.send({status: 1, msg: '删除成功~'});
			}else{
				res.send({status: 1, msg: '数据已为空~'});
			}
		}
	})
}

// 修改用户
exports.user_edit = function(req, res) {
	var email = req.body.email;
	User.find({email: email}, function(err, arr){
		for(var i = 0; i < arr.length; i ++){
			arr[i].name.first = 'feng';
			arr[i].save(function(err, data){
				console.log('ok')
			});
		}
		res.send({status: 1, data: arr, msg: '请求成功~'});
	})
}