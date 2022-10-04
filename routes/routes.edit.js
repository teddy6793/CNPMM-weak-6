const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers.blogs');

router.get('/:id', controllers.editBlog);
router.post('/:id', controllers.editBlog);

module.exports = router;