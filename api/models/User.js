const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

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

//Hash the Password
UserSchema.methods.generateHashedPassword = async function () {
  let salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
};

//generate the token
UserSchema.methods.generateToken = function () {
  return jwt.sign(
    { _id: this._id, name: this.name, role: this.role },
    process.env.JWT_KEY
  );
};

//Create the Model

var User = mongoose.model('User', UserSchema);

//Export
module.exports.User = User;
