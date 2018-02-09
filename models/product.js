var  mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema({
	name: String,
	desc: String,
	pic: [],
	datetime:[Date],
})

const product = mongoose.model('product', productSchema);


module.exports = product;