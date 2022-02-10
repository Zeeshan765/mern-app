const express = require('express');
const router = express.Router();
let { User } = require('../models/User');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const crypto = require('crypto');
const sendEmail = require('../utilis/sendEmail');

//Register
router.post('/register', async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user)
      return res.status(400).json('User with Given Email Already Exsist ');
    user = new User();
    (user.name = req.body.name),
      (user.email = req.body.email),
      (user.phone = req.body.phone),
      (user.password = req.body.password),
      await user.generateHashedPassword(); //---->Hash the password
    await user.save();
    let accessToken = user.generateToken(); //----->Genrate Token

    const { password, ...info } = user._doc;

    res.status(200).json({ ...info, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

//Login
router.post('/login', async (req, res) => {
  //Check the user exsit in database or not
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json('User Not Registered');
  //If user Exsist then compare it password with the database password
  let matchpassword = await bcrypt.compare(req.body.password, user.password);
  if (!matchpassword) return res.status(401).json('Invalid Password');
  //If user esists then assign token to that user
  let accessToken = user.generateToken(); //----->Genrate Token
  res.json(accessToken);
});

//Forget Password
router.post('/forgetpassword', async (req, res) => {
  /*try {
    const user = User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json('Email does not Exsist');

    // Reset Token Gen and add to database hashed (private) version of token
    const resetToken = user.getResetPasswordToken();

    await user.save();

    // Create reset url to email to provided email
    const resetUrl = `${req.protocol}://${req.get(
      'host'
    )}/passwordreset/${resetToken}`;

    // HTML Message
    const message = `
       <h1>You have requested a password reset</h1>
       <p>Please make a put request to the following link:</p>
       <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
     `;

    try {
      await sendEmail({
        to: user.email,
        subject: 'Password Reset Request',
        text: message,
      });

      res.status(200).json('Email Sent Successfully ');
    } catch (err) {
      console.log(err);

      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      return res.status(500).json('Email Could Not b send');
    }
  } catch (error) {
    return res.status(501).json('Bhai nai honi email send');
  }*/

  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(404).json('User Not Exsist');
  }

  // Get ResetPassword Token
  const resetToken = user.getResetPasswordToken();

  await user.save();

  const resetPasswordUrl = `http://localhost:3000/passwordreset/${resetToken}`;

  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

  try {
    await sendEmail({
      to: user.email,
      subject: `Ecommerce Password Recovery`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    return res.status(500).json(error);
  }
});

module.exports = router;
