const express = require('express');
const router = express.Router();
const authorization = require('../middleware/authorization');
const admin = require('../middleware/admin');

router.post('/product', authorization, admin, async (req, res) => {
  res.json('Hey This is Zeeshan');
});

router.get('/product/new', admin, async (req, res) => {
  res.json('Here we go');
});

module.exports = router;
