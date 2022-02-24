const { validate } = require('../models/User');
function validateUser(req, res, next) {
  let { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  next();
}

/*function validateUserLogin(req, res, next) {
    let { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    next();
  }*/

module.exports = validateUser;
