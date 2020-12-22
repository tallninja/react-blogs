module.exports = async (req, res, Blog) => {
  await Blog.findOne({ _id: req.query.id }).exec((err, blog) => {
    if (err) {
      res.status(500).send({ error: "Failed to fetch the blog !" });
      return;
    } else {
      res.status(200).send(blog);
      return;
    }
  });
};
