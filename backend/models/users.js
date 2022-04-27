const mongoose = require("mongoose");

var useSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const userModel = mongoose.model("userList", useSchema);

module.exports = userModel;
