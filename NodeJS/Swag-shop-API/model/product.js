var mongoose = require('mongoose');
var Schema = mongoose.Schema; //help to organize, defy NOSQL.

var product = new Schema({
    title: String,
    price: Number,
    likes: {type: Number, default:0}
    
});

module.exports = mongoose.model('Product',product);