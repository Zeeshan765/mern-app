const express = require('express');
const router = express.Router();
let { User } = require('../models/User');

router.post('/register', async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user)
    return res.status(400).json('User with Given Email Already Exsist ');
  user = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
  });
  try {
    let newuser = await user.save();
    res.status(201).json(newuser);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
