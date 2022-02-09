// Here we can do all crud operations of the User
const express = require('express');
const router = express.Router();
let { User } = require('../models/User');
const authorization = require('../middleware/authorization');
const admin = require('../middleware/admin');

//Edit Or Update the user Profile
router.put('/:id', authorization, async (req, res) => {
  try {
    let user = User.findById(req.params.id);
    (user.name = req.body.name),
      (user.email = req.body.email),
      (user.phone = req.body.phone),
      (user.password = req.body.password),
      await user.generateHashedPassword(); //---->Hash the password
    let updateduser = await user.save();

    return res.status(200).json(updateduser);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//get single user
router.get('/find/:id', authorization, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...info } = user._doc;
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get All the user ------>Admin
router.get('/all', authorization, admin, async (req, res) => {
  const query = req.query.new;

  try {
    let user = query
      ? await User.find().sort({ _id: -1 }).limit(2)
      : await User.find();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(402).json(error);
  }
});

//Delete the user ------->Admin
router.delete('/:id', authorization, admin, async (req, res) => {
  try {
    let user = await User.findByIdAndDelete(req.params.id);
    return res.status(200).json('User Deleted Succesffuly');
  } catch (error) {
    return res.status(401).json(error);
  }
});

//GET USER STATS------->Admin

router.get('/stats', authorization, admin, async (req, res) => {
  const today = new Date();
  const latYear = today.setFullYear(today.setFullYear() - 1);

  try {
    const data = await User.aggregate([
      {
        $project: {
          month: { $month: '$createdAt' },
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
// if (req.user.id === req.params.id);
//if(req.body.password){

//}
