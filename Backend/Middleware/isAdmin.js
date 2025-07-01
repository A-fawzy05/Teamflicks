module.exports = (req, res, next) => {
    if (req.user.isAdmin && req.user.isAdmin()) {
      return next();
    }
    return res.status(403).json({ message: "Admin only" });
  };