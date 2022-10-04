const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers.blogs');


router.get('', controllers.addBlog);
router.post('', controllers.addBlog);

module.exports = router;