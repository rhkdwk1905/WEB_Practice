const express = require('express');
const router=express.Router();
const path=require('path');
const mongoose=require('mongoose');
const Schemas=require('../models');

//Mongo URI
const mongoURI='mongodb://localhost/Test';

//Create mongo connection
const conn=mongoose.createConnection(mongoURI);

let UserModel,PostModel;
let CounterModel;

//Db connection
conn.once('open',()=>{
	// Init Stream
	mongoose.set('useFindAndModify',false);
	console.log("Connected MongoDB ");
	
	CounterSchema=Schemas.createCounterSchema(mongoose);
	
	UserSchema=Schemas.createUserSchema(mongoose);
	PostSchema=Schemas.createPostSchema(mongoose);
  
	//use conn.model instead of moongoose.model becuase of sync problem
	CounterModel=conn.model("CounterModel",CounterSchema);
	
	UserModel=conn.model("UserModel",UserSchema);
	PostModel=conn.model("PostModel",PostSchema);

	//console.dir(mongoose);
	console.log("DB&Stream Service Start")

});


//------------------------------------Get func-------------------------//

//@route GET/
//@desc Loads form
router.get('/',(req,res)=>{
	console.log("Hello World!");
	let test="Hello Wolrd!";
	
	return res.json(test);

});

//@route GET /postlist/:page_number
//@desc Disyplay postlist
router.get('/postlist/:page_number',(req,res)=>{
	//1~10 11~20 21~30  ==>  page_number-9~page_number*10
	let count=(page_number-1)*10;
	
	console.log('call postlist');
	console.log(req.params.index);
	
	PostModel.aggregate([
        {
          $project:{
            index:1,
            title:1,
			date:1,
			views:1
        }},
        {
          $sort:{count:-1}
        },
        {
          $limit: 10
        },
		{
			$skip: count
		}
    ], function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('pagelist api call success');
        //console.log(result);
        res.json(result);
    });
});

//@route GET /readpost/:index
//@desc Disyplay post
router.get('/readpost/:index',(req,res)=>{
	
	
	let count=0;
	
	console.log('call post page');
	console.log(req.params.index);
	
	PostModel.find({'index':req.params.index},function(err,data){
		if(err){
			console.log(err);
			res.status(500).send('Internal Server Error');
		}else{
			if(data==null){
				console.log('emtpy data in postlist');
				return res.json('empty');
			}else{
				
				data.views++;
				data.save();
				
				let json_data=new Object();

				json_data.id=data[i].id;
				json_data.title=data[i].title;
				json_data.date=data[i].date;
				json_data.content=data[i].content;
				json_data.index=data[i].index;
				json_data.views=data[i].views;
					
				return res.json(json_data);
			}
		}
	});
});

//------------------------------------Post func-------------------------// 참고로 모두 /api 를 앞에 붙여야 함

//@route POST /login
//@desc login func
router.post('/login',(req,res)=>{
	console.log('login api call')
	console.dir(req.body.user);
	console.log(req.body.user.userId+" "+req.body.user.password);
	
	UserModel.findOne({'userId':req.body.user.userId},function(err,data){
		if(err){
			console.log(err);
			res.status(500).send('Internal Server Error');
		}
    else{
			if(data==null){
				console.log('no id');
				return res.json('no_id');
			}
      else{
				if(data.password==req.body.user.password) {
					let json_data=new Object();
					json_data.userId=data.userId;
					json_data.name=data.name;
					
					return res.json(json_data);
				}
				else return res.json('pw_incorrect')
			}
		}
	});
	
})


//@route POST /signup
//@desc signup func
router.post('/signup',(req,res)=>{
	console.log('signup api call')
  console.dir(req.body.user)

	UserModel.findOne({'userId':req.body.user.userId},function(err,data){
		if(err){
			console.log(err);
			res.status(500).send('Internal Server Error');
		}else{
			if(data==null){

				console.log("signup "+req.body.user.userId);
				
				let new_data=new UserModel();
				
				new_data.userId=req.body.user.userId;
        new_data.userEmail=req.body.user.userEmail;
        new_data.phone=req.body.user.phone;
        new_data.name=req.body.user.name;
        new_data.studentID=req.body.user.studentID;
        new_data.password=req.body.user.password;
				
				new_data.save(function(err,data){
					if(err){
						console.log(err);
						res.status(500).send('Internal Server Error');
					}else{
						console.log('save signup ok');
						return res.json('save_signup');
					}
				});
			}else{
				console.log("duplicate id is comming.")
				return res.json('duplicate_id');
			}
		}
	});
	
})


//@route POST /post
//@desc upload post to DB
router.post('/post',(req,res)=>{
	let counter=0;
	let name='posts';
	console.log('post upload api call')
	
	CounterModel.findOne({'id':name},function(err,data){
		if(err){
			console.log(err);
			res.status(500).send('Internal Server Error');
		}else{
			if(data==null){
				let new_count_data=new CounterModel();
				new_count_data.id="posts";
				new_count_data.count=0;
				console.log(new_count_data);
				new_count_data.save(function(err,data){
					if(err){
						console.log(err);
						res.status(500).send('Internal Server Error');
					}else{
						console.log('make first post');
					}
				});
			}
			
			 console.dir(data);
			let new_data=new PostModel();
			console.log('2');
			new_data.id=req.body.id;
			new_data.title=req.body.title;
			new_data.content=req.body.content;	
			new_data.date=req.body.date;
			new_data.index=data.count+1;
			new_data.save(function(err,data){
					if(err){
						console.log(err);
						res.status(500).send('Internal Server Error');
					}else{
						console.log('save post ok');
					}
			});
			
			data.count++;
			data.save(function(err,data){
				if(err){
					console.log(err);
					res.status(500).send('Internal Server Error');
				}else{
					console.log('save ok');
					return res.json('save count ok');
				}
			});

		}
	});
	
})
//------------------------------------Delete func-------------------------//

//@route DELETE /deletePost/:posttitle
//@desc delelte post
router.delete('/deletePost/:title',(req,res)=>{
	console.log('post delete api call');
	console.log('post delete '+req.params.title);
	PostModel.deleteOne({title:req.params.title},(err)=>{
		if(err) return handleError(err);
		return res.json('delete');
	});

});

module.exports=router;