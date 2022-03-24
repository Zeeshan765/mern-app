const express = require('express');
const router = express.Router();
const authorization = require('../middleware/authorization');
const admin = require('../middleware/admin');

router.post('/product', async (req, res) => {
  res.json('Hey This is Zeeshan');
});

router.get('/product/:id', admin, async (req, res) => {
  res.send('dkd');
});

module.exports = router;
