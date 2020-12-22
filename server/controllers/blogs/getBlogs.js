module.exports = async (req, res, Blog) => {
  await Blog.find({}).exec((err, blogs) => {
    if (err) {
      res.status(500).send({ error: "Failed to fetch blogs" });
    } else {
      if (blogs.length > 0) {
        res.status(200).send(blogs);
        return;
      }
      res.status(200).send(null);
      return;
    }
  });
};
