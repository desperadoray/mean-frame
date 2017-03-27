const mongoose = require('mongoose');
const bcrypy = require('bcryptjs');
const config = require('../config/database');

//user schema
const UserSchema = mongoose.Schema({
	name: {
		type: String
	},
	email: {
		type: String,
		required: true
	},
	username: {
		type : String,
		required : true
	},
	password: {
		type: String,
		required : true
	}
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.getUserByUsername = function(id, callback){
	const query = {username: username}
	User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
	bcrypy.genSalt(10, (err, salt) => {
		bcrypy.hash(newUser.password, salt, (err,hash) =>{
			if(err) throw err;
			newUser.password = hash;
			newUser.save(callback);
		});
	});
}