const User = require('../Model/User');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

exports.signup = async (req, res) => {
  // 1) Validate inputs
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { username, email, password } = req.body;
    const existing = await User.findOne({ $or: [{ email }, { username }] });
    if (existing) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({ username, email, password });
    await user.save();

    const token = user.generateToken();
    res.status(201).json({
      success: true,
      data: {
        _id: user._id,
        username: user.username,
        email: user.email,
        subscription: user.subscription
      },
      token,
      expiresIn: 10 * 60 * 1000  // 10 minutes in ms
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  // 1) Validate inputs
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });

    const token = user.generateToken();

    res.json({
      success: true,
      data: {
        _id: user._id,
        username: user.username,
        email: user.email,
        subscription: user.subscription
      },
      token,
      expiresIn: 10 * 60 * 1000
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getCurrentUser = async (req, res) => {
  res.json({
    success: true,
    data: req.user
  });
};


exports.updateSubscription = async (req, res) => {
  try {
    const { subscription } = req.body;
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.subscription = subscription;
    await user.save();

    user.password = undefined;
    user.token = undefined;

    res.json({
      success: true,
      data: user,
      message: 'Subscription updated successfully'
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSubscription = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('subscription');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      success: true,
      subscription: user.subscription
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};