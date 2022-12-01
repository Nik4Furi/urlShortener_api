const mongoose = require('mongoose');
const shortid = require('shortid');

//Establish the Schema of short-url
const Shorturl = new mongoose.Schema({
    fullurl:{type:String,required:true},
    shorturl:{type:String,required:true,default:shortid.generate},
    clicks:{type:Number, required:true,default:0}
})

//Creating the model
const ShorturlModel = mongoose.model('Shorturl',Shorturl);

//Export the model
module.exports = ShorturlModel;