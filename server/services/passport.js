const passport = require("passport");
const config = require("config");
const mongoose = require("mongoose");
const GithubStrategy = require("passport-github2");
const GoogleStrategy = require("passport-google-oauth20");

const saveUser = require("../controllers/auth/saveUser");

const User = mongoose.model("users");

require("../serializers/user")(User, passport);

const github = () =>
  passport.use(
    new GithubStrategy(
      {
        clientID: config.get("github.clientID"),
        clientSecret: config.get("github.clientSecret"),
        callbackURL: "/auth/github/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        saveUser(User, profile, done);
      }
    )
  );

const google = () =>
  passport.use(
    new GoogleStrategy(
      {
        clientID: config.get("google.clientID"),
        clientSecret: config.get("google.clientSecret"),
        callbackURL: "/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        saveUser(User, profile, done);
        // console.log(profile);
      }
    )
  );

module.exports = { github, google };
