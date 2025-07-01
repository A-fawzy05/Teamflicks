const mongoose = require('mongoose');

const supportSchema = new mongoose.Schema({
  firstName: { type: String, required: true, maxlength: 8 },
  lastName:  { type: String, required: true, maxlength: 8 },
  email:     { type: String, required: true },
  phone:     { type: String, required: true },
  message:   { type: String, required: true },
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SupportRequest', supportSchema);
