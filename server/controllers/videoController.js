const VideoModel = require("../models/video");
const dotenv = require("dotenv");
dotenv.config();

/******************************************************************************
 *                              Video Controller
 ******************************************************************************/
class VideoController {
  getAllVideos = async (req, res, next) => {
    let videoList = await VideoModel.find();
    if (!videoList.length) {
      throw new Error(404, "Videos not found");
    }

    videoList = videoList.map((video) => {});

    res.send(videoList);
  };

  getVideoById = async (req, res, next) => {
    const video = await VideoModel.findOne({ id: req.params.id });
    if (!video) {
      throw new Error(404, "Video not found");
    }

    res.send(video);
  };

  getVideoByTitle = async (req, res, next) => {
    const video = await VideoModel.findOne({ title: req.params.title });
    if (!video) {
      throw new Error(404, "Video not found");
    }

    res.send(video);
  };



  createVideo = async (req, res, next) => {
    const result = await VideoModel.create(req.body);

    if (!result) {
      throw new Error(500, "Something went wrong");
    }

    res.status(201).send("Video was created!");
  };

  updateVideo = async (req, res, next) => {
    const result = await VideoModel.update(req.body, req.params.id);

    if (!result) {
      throw new Error(404, "Something went wrong");
    }

    const { affectedRows, changedRows, info } = result;

    const message = !affectedRows
      ? "Video not found"
      : affectedRows && changedRows
      ? "Video updated successfully"
      : "Updated failedd";

    res.send({ message, info });
  };

  deleteVideo = async (req, res, next) => {
    const result = await VideoModel.delete(req.params.id);
    if (!result) {
      throw new Error(404, "Video not found");
    }
    res.send("Video has been deleted");
  };
}

/******************************************************************************
 *                               Export
 ******************************************************************************/
module.exports = new VideoController();
