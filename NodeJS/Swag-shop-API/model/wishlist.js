var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
var ObjectId = Schema.Types.ObjectId;

var wishlist = new Schema({
    title: {type: String, default: "Cool Wish List"},
    products: [{type: ObjectId, ref:'Product'}] //IT has to be a mongoDB object- ObjectId, referrenced to the model Product we export. we use this kind of ref in order to save code lined and prevent duplicates- so the data won't be saved in the products table, and the wishlist array    
})

module.exports = mongoose.model('WishList',wishlist);