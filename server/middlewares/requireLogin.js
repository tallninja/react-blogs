module.exports = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(201).send({ error: "Login required !" });
  }
};
