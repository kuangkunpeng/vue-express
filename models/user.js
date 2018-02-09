var  mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	user: String,
	password: String
})

const user = mongoose.model('user', userSchema);


module.exports = user;