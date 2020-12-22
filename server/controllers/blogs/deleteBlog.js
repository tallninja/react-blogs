module.exports = async (req, res, Blog) => {
  const blog = await Blog.deleteOne({
    _id: req.query.id,
    _user: req.user.id,
  }).exec((err) => {
    if (err) {
      res.status(500).send({ error: "Failed to delete blog !" });
    } else {
      res.status(200).send({ success: "Blog deleted successfully !" });
    }
  });
};
