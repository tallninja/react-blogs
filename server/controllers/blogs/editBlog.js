module.exports = async (req, res, Blog) => {
  const editBlog = await Blog.updateOne(
    {
      _id: req.query.id,
      _user: req.user.id,
    },
    {
      title: req.body.title,
      content: req.body.content,
    }
  ).exec((err) => {
    if (err) {
      res.status(500).send({ error: "Failed to edit blog !" });
    } else {
      res.status(200).send({ success: "Blog edited successfully !" });
    }
  });
};
