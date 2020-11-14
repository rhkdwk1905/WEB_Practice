const express = require('express');
const router = express.Router();
const User = require('../models/user');
//const crypto = require('crypto'); //Node.js 에서 제공하는 암호화 모듈
//const properties = require('../properties/key.js');
// mapping 
// Login

//SIGN UP
/* POST를 통해 보내오면 저장한다. */
router.post('/signUp',(req,res, next)=>{
	const user = new User();
	console.log('signup api call');
	
	//변수 입력
	user.userId = req.body.user.userId;
	user.userEmail = req.body.user.userEmail;
	user.phone = req.body.user.phone;
	user.name = req.body.user.name;
	user.studentID = req.body.user.studentID;
	user.password = req.body.user.password;
	
	user.save(function(err){
		if(err){
			console.error(err);
			res.json({result: 0});
			return;
		}
		res.json({result: 1});
	});
});

//LOGIN
/* POST를 통해 로그인 정보를 보내오면 맞는지 확인한다. */
router.post('/checkLogin', function(req, res, next){
	User.findOne({id: req.body.user.userId, password: req.body.user.password}, function(err, user){
   // 구문 error
    if(err) return res.status(500).json({error: err});
    // User가 없으면 error
    if(!user) return res.status(404).json({error: 'user not found'});
    res.json(user);
	})
})

module.exports = router;
