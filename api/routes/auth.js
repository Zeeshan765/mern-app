const express = require('express');
const router = express.Router();
let { User } = require('../models/User');
const bcrypt = require('bcryptjs');

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

module.exports = router;
