module.exports = async (req, res, Blog) => {
  const { title, content } = req.body;
  await new Blog({
    title: title,
    content: content,
    _user: req.user.id,
    author: req.user.displayName,
    avatarURL: req.user.profileImage,
    dateCreated: new Date(),
  }).save((err) => {
    if (err) {
      res.status(500).send({ error: "Error creating blog !" });
      return;
    } else {
      res.status(201).send({ success: "Blog Created Successfully" });
      return;
    }
  });
};
