const express = require('express');
const router = express.Router();
const Todos = require('../model/Todos');

router.post('/:_id', async (req, res) => {
    try {
        await Todos.updateOne({_id: req.params._id}, {$set: {title: req.body.title, description: req.body.description}})
        .then(result => res.status(200).json(result));
    } catch (e) {
        res.status(500).json(e.message);
    }
});

module.exports = router;