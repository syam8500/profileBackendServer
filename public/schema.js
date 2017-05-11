var mongoose=require('mongoose');
mongoose.Promise=require('bluebird');
mongoose.connect('mongodb://syam:syam@ds137101.mlab.com:37101/syam');
var user= mongoose.Schema(
    {
        username:String,
        email:String,
        mobile:Number
    }
);
var users=mongoose.model('profile',user);
module.exports= users;