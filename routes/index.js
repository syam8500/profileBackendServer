var express = require('express');
var router = express.Router();
var user=require('../public/schema');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send( 'Express' );
// });
router.post('/',function(req,res){
  var isedit =req.body.isEdit;
  var uname= req.body.username;
  var newuser= new user({
   username: req.body.username,
   email   : req.body.email,
   mobile  : req.body.phone
  });

if(isedit == false)
{

  newuser.save(function(err,data){
    if(err){
            res.send('error');
           }
    else{
      console.log('data saved successfully')
        res.json({data:'sucess'});
        }
     })
  }
else
{
  console.log("jdfhjfh")
 user.findOneAndUpdate({ "username":uname }, { "$set": {"email":newuser.email, "mobile": newuser.mobile}}).exec(function(err, user){
   if(err) {
       console.log(err);
       res.json(err);
   } else {
            res.json("updated");
   }
});
}



})
router.get("/profiles",function(req,res){
   user.find({},function(err,users){
      res.json(users);
   })
})

module.exports = router;


// Book.findOneAndUpdate({ "_id": bookId }, { "$set": { "name": name, "genre": genre, "author": author, "similar": similar}}).exec(function(err, book){
//    if(err) {
//        console.log(err);
//        res.status(500).send(err);
//    } else {
//             res.status(200).send(book);
//    }
// });