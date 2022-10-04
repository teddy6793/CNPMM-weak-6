const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers.blogs');

router.get('', controllers.getAll);
router.get('/:id', controllers.getBlogById);
router.post('/:id/addComment', controllers.addCommentToBlog);
module.exports = router;