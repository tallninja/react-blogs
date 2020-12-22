module.exports = async (req, res, Blog) => {
  const paginateOptions = {
    page: req.query.page,
    limit: 10,
  };

  await Blog.paginate(
    Blog.find({ _user: req.user.id }),
    paginateOptions,
    (err, blogs) => {
      if (err) {
        res.status(500).send({ error: "Could Not Fetch Blogs !" });
      } else {
        if (blogs.docs.length > 0) {
          res.status(200).send(blogs);
          return;
        } else {
          res.send(null);
          return;
        }
      }
    }
  );
};
