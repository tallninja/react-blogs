const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  authID: String,
  displayName: String,
  profileImage: String,
});

mongoose.model("users", UserSchema);
