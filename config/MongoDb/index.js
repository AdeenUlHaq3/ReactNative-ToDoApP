const mongoose = require('mongoose');
mongoose.connect('mongodb://adeenulhaq:adeen553gmail@ds159184.mlab.com:59184/todo', {useNewUrlParser: true});

module.exports = mongoose;