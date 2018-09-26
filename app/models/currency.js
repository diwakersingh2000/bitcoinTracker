var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var currencySchema=new Schema({
    name:{type:String,required:true},
    date:{type:String,required:true},
    value:{type:String,required:true}
});

module.exports  = mongoose.model('Currency', currencySchema);