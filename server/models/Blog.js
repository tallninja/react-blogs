const mongoose = require("mongoose");

const { Schema } = mongoose;

const BlogSchema = new Schema({
  title: String,
  content: String,
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateCreated: Date,
});

mongoose.model("blogs", BlogSchema);
