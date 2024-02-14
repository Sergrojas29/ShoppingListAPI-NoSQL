require('dotenv').config();
const mongoose = require('mongoose');


const dbName = 'shoppinglistdata'

mongoose.connect(process.env.MONGODB_URI ||`mongodb://127.0.0.1:27017/${dbName}`)


module.exports = mongoose.connection;