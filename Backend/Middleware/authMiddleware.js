const jwt = require('jsonwebtoken');
const User = require('../Model/User');

module.exports = async (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Not authorized' });
  }
  const token = auth.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id).select('-password');
    if (!user) throw new Error();
    req.user = user;
    next();
  } catch {
    res.status(401).json({ message: 'Token invalid or expired' });
  }
};