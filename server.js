const express = require('express');
const app = express();
const mongoose = require('./config/MongoDb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log("db connected"));

app.listen(process.env.PORT || 3000, () => {
    console.log('server connected to localhost')
})

app.use(express.json());

app.use('/', require('./routes/index.js'));