const express = require("express");
const mongoose = require("mongoose");
require("../models/Blog");

const requireLogin = require("../middlewares/requireLogin");

const Blog = mongoose.model("blogs");
const router = express.Router();

// get all blogs
const getBlogs = require("../controllers/blogs/getBlogs");
router.get("/blogs/all", async (req, res) => getBlogs(req, res, Blog));

// create a blog
const createBlog = require("../controllers/blogs/createBlog");
router.post("/blogs", requireLogin, (req, res) => createBlog(req, res, Blog));

// get a list of users blogs
const getUserBlogs = require("../controllers/blogs/getUserBlogs");
router.get("/blogs", requireLogin, (req, res) => getUserBlogs(req, res, Blog));

// get a single blog
const getBlog = require("../controllers/blogs/getBlog");
router.get("/blogs/item", (req, res) => getBlog(req, res, Blog));

// delete a blog
const deleteBlog = require("../controllers/blogs/deleteBlog");
router.delete("/blogs", requireLogin, (req, res) => deleteBlog(req, res, Blog));

// edit a blog
const editBlog = require("../controllers/blogs/editBlog");
router.patch("/blogs", requireLogin, (req, res) => editBlog(req, res, Blog));

module.exports = router;
