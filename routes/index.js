const express = require('express');
const router = express.Router();

router.use('/get', require('./getTodo'));
router.use('/add', require('./addTodo'));
router.use('/update', require('./updateTodo'));
router.use('/delete', require('./deleteTodo'));

module.exports = router;