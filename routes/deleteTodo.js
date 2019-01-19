const express = require('express');
const router = express.Router();
const Todos = require('../model/Todos');

router.delete('/:_id', async (req, res) => {
    try {
        await Todos.deleteOne({_id: req.params._email})
        .then(result => res.status(200).json(result));
    } catch (e) {
        res.status(500).json(e.message);
    }
});

module.exports = router;