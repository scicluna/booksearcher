const mongoose = require('mongoose');

//Basic mongoose setup. MONGODB_URI is set up for production in heroku
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks');

module.exports = mongoose.connection;
