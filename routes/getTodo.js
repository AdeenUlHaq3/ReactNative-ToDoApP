const express = require('express');
const router = express.Router();
const Todos = require('../model/Todos');

router.get('/', async (req, res) => {
    try {
        const todos = await Todos.find({});
        res.send(todos);
    } catch (e) {
        res.send(500, {message: e.message});
    }
});

module.exports = router;