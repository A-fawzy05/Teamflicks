const express = require('express');
const router = express.Router();
const SupportController = require('../Controller/supportController');
const auth = require('../Middleware/authMiddleware');
const isAdmin = require('../Middleware/isAdmin');


router.post('/', SupportController.createRequest);

router.get('/', auth, isAdmin, SupportController.getAllRequests);

module.exports = router;
