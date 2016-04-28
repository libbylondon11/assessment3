var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var newHero=new Schema({
  alias: {type: String, required: true},
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  city: {type: String, required: true},
  power_name: {type: String, required: true}
});

var Heroes=mongoose.model('Heroes', newHero);

module.exports=Heroes;
