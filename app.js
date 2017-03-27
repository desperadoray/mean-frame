const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const config = require('./config/database');

//connect to database
mongoose.connect(config.database);

// mongoose.connection.on('connected', () => {
// 	console.log('connect to database '+ config.database);
// });

// mongoose.connection.on('connected', (err) => {
// 	console.log('error '+ err);
// });


const app = express();

const users = require('./routes/users');

const port = 3000;

//enable cors middleware
app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//enable body parser middleware
app.use(bodyParser.json());

app.use('/users', users);

//index route
app.get('/', (req, res) => {
	res.send('Invalid endpoint!');
});

//start server
app.listen(port, () => {
	console.log('Server started on port '+ port);
});