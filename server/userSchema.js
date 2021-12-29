const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  title: { type: String, required: false },
  company: { type: String, required: false },
  phone: { type: String, required: false },
  email: { type: String, required: false },
  about: { type: String, required: false },
  //   image: { type: File, required: false },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
