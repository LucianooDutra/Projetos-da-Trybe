const jwt = require('jsonwebtoken');
require('dotenv/config');
const { getByUserIdService } = require('../services/userService');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');
  // console.log(token);
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, secret);
    // console.log(decoded);
    const user = await getByUserIdService(decoded.id);
    // console.log(user.dataValues);
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};