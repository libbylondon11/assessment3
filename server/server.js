var express=require('express');
var mongoose=require('mongoose');
var index=require('./routes/index');
var hero=require('./routes/hero');
var bodyParser=require('body-parser');

var mongoURI="mongodb://localhost/heroes";
var MongoDB=mongoose.connect(mongoURI).connection;

var app=express();

app.use(bodyParser.json());
app.use(express.static('server/public'));




MongoDB.on('error', function(err){
  console.log('mongodb connection error:', err);
});

MongoDB.once('open', function (){
  console.log('mongodb connection open!');
});
//routes///
app.use('/', index);
app.use('/hero', hero);

var server=app.listen(3000, function(){
  var port=server.address().port;
  console.log('listening on port: ', port);
});
