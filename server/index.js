const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("config");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");

// mongo
const mongoURI = config.get("mongo.URI");
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.use(bodyParser.json());

// sesions and cookies
app.use(
  cookieSession({
    maxAge: 7 * 24 * 60 * 60 * 1000,
    keys: [config.get("cookieSession.key")],
  })
);
app.use(passport.initialize());
app.use(passport.session());

// auth
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

// api
const blogRoutes = require("./routes/blogRoutes");
app.use("/api", blogRoutes);

app.listen(5000, () => {
  console.log("Server started successfully !");
});
