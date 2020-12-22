const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const { Schema } = mongoose;

const BlogSchema = new Schema({
  title: String,
  content: String,
  _user: { type: Schema.Types.ObjectId, ref: "users" },
  author: String,
  avatarURL: String,
  dateCreated: Date,
});

BlogSchema.plugin(mongoosePaginate);

mongoose.model("blogs", BlogSchema);
