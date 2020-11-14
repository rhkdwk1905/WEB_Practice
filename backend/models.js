var Schemas={};
//just schema ver
//use app.js const mongo=require('moongoose')

Schemas.createCounterSchema=function(mongo){
	var CounterSchema= mongo.Schema({
		id: String,
		count: Number
	})
	
	console.log('On CounterSchema');
	
	return CounterSchema;
}

Schemas.createUserSchema=function(mongo){
	//mongodb part
	var UserSchema = mongo.Schema({
		userId: String,
		userEmail: String,
		phone: String,
    name: String,
    studentId: String,
    password: String,
    admin: {type: Boolean, default: false}
	});
	
	console.log('On UserSchema');

	return UserSchema;
};

Schemas.createPostSchema=function(mongo){
	//mongodb part
	var PostSchema = mongo.Schema({
		id: String,
		title: String,
		date: {type: Date, default: Date.now()},
		content: String,
		index: Number,
		views: {type: Number, default: 0}
	});
	
	console.log('On PostSchema');

	return PostSchema;
};

module.exports=Schemas;