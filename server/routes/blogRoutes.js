const express = require("express");
const mongoose = require("mongoose");
require("../models/Blog");

const Blog = mongoose.model("blogs");
const router = express.Router();

// create a blog
router.post("/blogs", async (req, res) => {
  const { title, content } = req.body;
  const newBlog = await new Blog({
    title: title,
    content: content,
    _user: req.user._id,
    dateCreated: new Date(),
  }).save();
  res.status(201).send({ success: "Blog created successfully !" });
});

// get a list of blogs
router.get("/blogs", async (req, res) => {
  const userBlogs = await Blog.find({ _user: req.user.id });
  if (userBlogs.length > 0) {
    res.send(userBlogs.reverse());
  } else {
    res.send(null);
  }
});

// get a single blog
router.get("/blogs/item", async (req, res) => {
  const blog = await Blog.findOne({ _id: req.query.id });
  res.send(blog);
});

// delete a blog
router.delete("/blogs", async (req, res) => {
  const deletedBlog = await Blog.deleteOne({
    _id: req.query.id,
    _user: req.user.id,
  }).exec();
  res.send({ success: "Blog deleted successfully !" });
});

// edit a blog
router.patch("/blogs", async (req, res) => {
  const { title, content } = req.body;
  const updatedBlog = await Blog.updateOne(
    {
      _id: req.query.id,
      _user: req.user.id,
    },
    {
      title: title,
      content: content,
    }
  ).exec();
  res.send({ message: "Blog edited successfully !" });
});

module.exports = router;
