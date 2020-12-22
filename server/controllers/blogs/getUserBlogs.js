module.exports = async (req, res, Blog) => {
  await Blog.find({ _user: req.user.id }).exec((err, blogs) => {
    if (err) {
      res.status(500).send({ error: "Could Not Fetch Blogs !" });
    } else {
      if (blogs.length > 0) {
        res.status(200).send(blogs);
        return;
      } else {
        res.send(null);
        return;
      }
    }
  });
};
