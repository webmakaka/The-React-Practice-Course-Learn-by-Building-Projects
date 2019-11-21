let admin = (req, res, next) => {
  if (req.user.role === 0) {
    return res.status(401).json({
      success: false,
      err: 'You are not allowed, get out of here!'
    });
  }

  next();
};

module.exports = { admin };
