const express = require("express");
const passport = require("passport");

const requireLogin = require("../middlewares/requireLogin");

const router = express.Router();

require("../models/User");

// LOGIN

// github
require("../services/passport").github();
router.get(
  "/github",
  passport.authenticate("github", { scope: ["read:user"] })
);
router.get("/github/callback", passport.authenticate("github"), (req, res) => {
  res.redirect("/");
});

// google
require("../services/passport").google();
router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  res.redirect("/");
});

// get current user
router.get("/current_user", (req, res) => {
  res.send(req.user);
});

// logout user
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
