const express = require("express");
const mongoose = require("mongoose");
require("../models/Blog");

const Blog = mongoose.model("blogs");
const router = express.Router();

// create a blog
router.post("/blogs/new", async (req, res) => {
  const { title, content } = req.body;
  const newBlog = await new Blog({
    title: title,
    content: content,
    _user: req.user._id,
    dateCreated: new Date(),
  }).save();
  res.status(201).send(newBlog);
});

// get a list of blogs
router.get("/blogs", async (req, res) => {
  const userBlogs = await Blog.find({ _user: req.user.id });
  res.send(userBlogs);
});

// delete a blog
router.delete("/blogs", async (req, res) => {
  const deletedBlog = await Blog.deleteOne({ _id: req.body.id });
  res.send({ success: "Blog deleted successfully !" });
});

// edit a blog
router.patch("/blogs", async (req, res) => {
  const { id, title, content } = req.body;
  const updatedBlog = await Blog.updateOne(
    {
      _id: id,
    },
    {
      title: title,
      content: content,
    }
  ).exec();
  res.send(updatedBlog);
});

module.exports = router;
