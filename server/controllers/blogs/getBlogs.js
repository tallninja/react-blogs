module.exports = async (req, res, Blog) => {
  const paginateOptions = {
    page: req.query.page,
    limit: 10,
  };

  await Blog.paginate(Blog.find({}), paginateOptions, (err, blogs) => {
    if (err) {
      res.status(500).send({ error: "Failed to fetch blogs" });
    } else {
      if (blogs.docs.length > 0) {
        res.status(200).send(blogs);
        return;
      } else {
        res.status(200).send(null);
        return;
      }
    }
  });
};
