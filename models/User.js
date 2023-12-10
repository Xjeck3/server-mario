const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({

  username: {
    type: String,
  },
  password: {
    type: String,
  },
  confirmed: {
    type: Boolean,
    default:false
  },

}, {
  timestamps: true
});


module.exports = mongoose.model("User", UserSchema);