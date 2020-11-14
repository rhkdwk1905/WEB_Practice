var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  userId:String,
  userEmail:String,
  phone:String,
  name:String,
  studentId:String,
  password:String,
  create_date: { type:Date, default:Date.now },
  admin: { type:Boolean, default:false}
});

// model을 user로 만들면 특별한 이름을 지정하지 않으면 
// mongoDB에서 알아서 Collection name을 알아서 복수형으로 해줍니다
// 그리하여 Collection name은 users로 됩니다 <무슨소리지?
module.exports = mongoose.model('user', userSchema);