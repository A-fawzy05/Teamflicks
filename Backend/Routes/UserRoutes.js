const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const UserController = require('../Controller/UserController');
const authMiddleware = require('../Middleware/authMiddleware');

router.post(
  '/signup',
  [
    check('username').notEmpty().withMessage('Username is required'),
    check('email').isEmail().withMessage('Invalid email'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
  ],
  UserController.signup
);

router.post(
  '/login',
  [
    check('email').isEmail().withMessage('Invalid email'),
    check('password').exists().withMessage('Password is required')
  ],
  UserController.login
);
router.get('/me', authMiddleware, UserController.getCurrentUser);
router.put(
  '/subscription',
  authMiddleware,
  [
    check('subscription')
      .isIn(['none', 'basic', 'standard', 'premium'])
      .withMessage('Invalid subscription type')
  ],
  UserController.updateSubscription
);

module.exports = router;