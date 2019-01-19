const mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    }
});

const Todos = mongoose.model('todos', todoSchema);

module.exports = Todos;