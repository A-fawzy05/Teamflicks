const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  subscription: {
    type: String,
    enum: ['none', 'basic', 'standard', 'premium'],
    default: 'none',
  }
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Generate JWT (10 minute expiry)
userSchema.methods.generateToken = function() {
  return jwt.sign(
    { _id: this._id, subscription: this.subscription },
    process.env.JWT_SECRET,
    { expiresIn: "10m" }
  );
};

// isAdmin helper: only the one Admin user
userSchema.methods.isAdmin = function() {
  return (
    this.username === "Admin" &&
    this.email    === "Admin@Admin.com"
  );
};

module.exports = mongoose.model("User", userSchema);