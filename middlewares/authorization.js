const authorization = (req, res, next) => {
  const permission = req.headers.x_admin;
  if (permission == 1) {
    next();
  } else {
    res.status(401).json({
      success: false,
      massage: `not authorized to download the file`,
    });
  }
};

module.exports = authorization;
