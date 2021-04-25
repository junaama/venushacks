const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');
const awaitHandlerFactory = require('../middleware/handler');


router.get('/', awaitHandlerFactory(videoController.getAllVideos)); // localhost:3000/api/v1/videos
router.get('/id/:id', awaitHandlerFactory(videoController.getVideoById)); // localhost:3000/api/v1/videos/id/vid
router.get('/videos/:title', awaitHandlerFactory(videoController.getVideoByTitle)); // localhost:3000/api/v1/videos/videotitle
router.post('/', createVideoSchema, awaitHandlerFactory(videoController.createVideo)); // localhost:3000/api/v1/videos
router.patch('/id/:id',updateVideoSchema, awaitHandlerFactory(videoController.updateVideo)); // localhost:3000/api/v1/videos/id/vid , using patch for partial update
router.delete('/id/:id', awaitHandlerFactory(videoController.deleteVideo)); // localhost:3000/api/v1/videos/id/vid

module.exports = router;