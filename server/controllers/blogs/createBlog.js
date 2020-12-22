module.exports = async (req, res, Blog) => {
  const { title, content } = req.body;
  await new Blog({
    title: title,
    content: content,
    _user: req.user.id,
    dateCreated: new Date(),
  }).save((err) => {
    if (err) {
      res.status(500).send({ error: "Error creating blog !" });
    } else {
      res.status(201).send({ success: "Blog Created Successfully" });
    }
  });
};
