const express = require('express');
const router = express.Router();
const Todos = require('../model/Todos');

router.post('/', async (req, res) => {
    try {
        await new Todos(req.body).save();
        res.send({message: 'User successfully created'});
    } catch (e) {
        res.send(500, {message: e.message});
    } 
});

module.exports = router;