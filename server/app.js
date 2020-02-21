const express = require('express');
const bodyParser = require('body-parser');
const music = require('./routers/music_routers'); 
const app = express();


const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://akartasova1:reset987@cluster0-eqiza.mongodb.net/test?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/music', music);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});