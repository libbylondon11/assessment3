var express=require('express');
var router=express.Router();
var path=require('path');
var Heroes=require('../../models/heroes');

router.get('/', function(request, response){

  console.log(request.body);

  Heroes.find({}, function(err, user){
    if(err){
      console.log(err);
    }else{
      response.send(user);
    }

  })
});

router.post('/', function(request, response){
  console.log(request.body);

  var newHero=new Hero(request.body);
  newUser.save(function(err){
    if(err){
      console.log(err);
      response.sendStatus(500);
    }else{
      console.log('it worked!');
      response.sendStatus(200);
    }
  })
});

module.exports=router;
