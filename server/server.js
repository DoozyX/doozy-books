const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const bookAPI = require('./controllers/book');
const userAPI = require('./controllers/user');

const config = require('./config/config').get(process.env.NODE_ENV);

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);

app.use('/api/book', bookAPI);
app.use('/api/user', userAPI);

app.listen(config.PORT, () => {
	console.log("started server on port " + config.PORT);
});
