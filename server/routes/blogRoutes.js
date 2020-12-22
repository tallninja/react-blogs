const express = require("express");
const mongoose = require("mongoose");
require("../models/Blog");

const Blog = mongoose.model("blogs");
const router = express.Router();

// create a blog
const createBlog = require("../controllers/blogs/createBlog");
router.post("/blogs", (req, res) => createBlog(req, res, Blog));

// get a list of users blogs
const getUserBlogs = require("../controllers/blogs/getUserBlogs");
router.get("/blogs", (req, res) => getUserBlogs(req, res, Blog));

// get a single blog
const getBlog = require("../controllers/blogs/getBlog");
router.get("/blogs/item", (req, res) => getBlog(req, res, Blog));

// delete a blog
const deleteBlog = require("../controllers/blogs/deleteBlog");
router.delete("/blogs", (req, res) => deleteBlog(req, res, Blog));

// edit a blog
const editBlog = require("../controllers/blogs/editBlog");
router.patch("/blogs", (req, res) => editBlog(req, res, Blog));

module.exports = router;
