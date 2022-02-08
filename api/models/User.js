const mongoose = require('mongoose');

//Create The Schema
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      default: 'user',
    },
  },
  { timestamps: true }
);

//Create the Model

var User = mongoose.model('User', UserSchema);

//Export
module.exports.User = User;
