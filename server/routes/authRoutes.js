const express = require("express");
const passport = require("passport");

const requireLogin = require("../middlewares/requireLogin");

const router = express.Router();

require("../models/User");

// login
require("../services/passport");
router.get(
  "/github",
  passport.authenticate("github", { scope: ["read:user"] })
);
router.get("/github/callback", passport.authenticate("github"), (req, res) => {
  res.redirect("/");
});

// get current user
router.get("/current_user", requireLogin, (req, res) => {
  res.send(req.user);
});

// logout user
router.get("/logout", (req, res) => {
  req.logout();
  res.send(req.user);
});

module.exports = router;
