const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const crypto = require('crypto');

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

    resetPasswordToken: String,
    resetPasswordExpire: Date,
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

//Generate the Reset Password Token
UserSchema.methods.generateResetPasswordToken = function () {
  //Generate the Reset Token
  const resetToken = crypto.randomBytes(20).toString('hex');

  //Hash the Above Reset Token add the resetpasswordtoken to user Schema
  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  //Assign the resetpasswordToken Expire Time
  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
};

//Create the Model

var User = mongoose.model('User', UserSchema);

//Export
module.exports.User = User;
