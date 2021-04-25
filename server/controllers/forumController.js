const ForumModel = require("../models/forum");
const dotenv = require("dotenv");
dotenv.config();

/******************************************************************************
 *                              Forum Controller
 ******************************************************************************/
class ForumController {
  getAllForums = async (req, res, next) => {
    let forumList = await ForumModel.find();
    if (!forumList.length) {
      throw new Error(404, "Forums not found");
    }

    forumList = forumList.map((forum) => {});

    res.send(forumList);
  };

  getForumById = async (req, res, next) => {
    const forum = await ForumModel.findOne({ id: req.params.id });
    if (!forum) {
      throw new Error(404, "Forum not found");
    }

    res.send(forum);
  };

  getForumByforumName = async (req, res, next) => {
    const forum = await ForumModel.findOne({ forumname: req.params.forumname });
    if (!forum) {
      throw new Error(404, "Forum not found");
    }

    res.send(forum);
  };

  getCurrentForum = async (req, res, next) => {
    res.send(req.currentForum);
  };

  createForum = async (req, res, next) => {
    const result = await ForumModel.create(req.body);

    if (!result) {
      throw new Error(500, "Something went wrong");
    }

    res.status(201).send("Forum was created!");
  };

  updateForum = async (req, res, next) => {
    const result = await ForumModel.update(req.body, req.params.id);

    if (!result) {
      throw new Error(404, "Something went wrong");
    }

    const { affectedRows, changedRows, info } = result;

    const message = !affectedRows
      ? "Forum not found"
      : affectedRows && changedRows
      ? "Forum updated successfully"
      : "Updated failedd";

    res.send({ message, info });
  };

  deleteForum = async (req, res, next) => {
    const result = await ForumModel.delete(req.params.id);
    if (!result) {
      throw new Error(404, "Forum not found");
    }
    res.send("Forum has been deleted");
  };
}

/******************************************************************************
 *                               Export
 ******************************************************************************/
module.exports = new ForumController();
