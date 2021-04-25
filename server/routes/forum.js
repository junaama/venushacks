const express = require('express');
const router = express.Router();
const forumController = require('../controllers/forumController');
const awaitHandlerFactory = require('../middleware/handler');


router.get('/', awaitHandlerFactory(forumController.getAllForums)); // localhost:3000/api/v1/forums
router.get('/id/:id', awaitHandlerFactory(forumController.getForumById)); // localhost:3000/api/v1/forums/id/vid
router.get('/forums/:title', awaitHandlerFactory(forumController.getForumByTitle)); // localhost:3000/api/v1/forums/forumtitle
router.post('/', awaitHandlerFactory(forumController.createForum)); // localhost:3000/api/v1/forums
router.patch('/id/:id', awaitHandlerFactory(forumController.updateForum)); // localhost:3000/api/v1/forums/id/vid , using patch for partial update
router.delete('/id/:id', awaitHandlerFactory(forumController.deleteForum)); // localhost:3000/api/v1/forums/id/vid

module.exports = router;