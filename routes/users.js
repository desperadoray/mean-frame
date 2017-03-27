const express = require('express');
const router = express.Router();

const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');

//Register
router.post('/register', (req, res, next) =>{
	let newUser = new User({
		name: req.body.name,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password
	});

	User.addUser(newUser, (err, user) => {
		if(err){
			res.json({success:false});
		}
		else{
			res.json({success:true});
		}
	});
});

//Auth
router.get('/auth', (req,res,next) =>{
	res.send('Auth');
});

//Profile
router.get('/profile', (req,res,next) =>{
	res.send('profile');
});

module.exports = router;