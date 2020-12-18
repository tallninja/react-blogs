const passport = require("passport");
const GithubStrategy = require("passport-github2");
const config = require("config");
const mongoose = require("mongoose");

const saveUser = require("../controllers/saveUser");

const clientID = config.get("github.clientID");
const clientSecret = config.get("github.clientSecret");

const User = mongoose.model("users");

require("../serializers/user")(User, passport);

passport.use(
  new GithubStrategy(
    {
      clientID: clientID,
      clientSecret: clientSecret,
      callbackURL: "/auth/github/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      saveUser(User, profile, done);
    }
  )
);
