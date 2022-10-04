const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers.blogs');

router.get('/:id', controllers.deleteBlog);

module.exports = router;