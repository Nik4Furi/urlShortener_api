const mongoose = require('mongoose');
const shortid = require('shortid');

//Establish the Schema of short-url
const urlsSchema = new mongoose.Schema({
    fullurl:{type:String,required:true},
    shorturl:{type:String,required:true,default:shortid.generate}
},{timestamps : true})

//Creating the model
const urlsModel = mongoose.model('Url',urlsSchema);

//Export the model
module.exports = urlsModel;