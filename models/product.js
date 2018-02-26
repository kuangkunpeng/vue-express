var  mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema({
	name: String,
	desc: String,
	pics: [{
		type:String
	}],
	date:Date,
})

const product = mongoose.model('product', productSchema);


module.exports = product;