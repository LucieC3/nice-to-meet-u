const jwt = require("jsonwebtoken");

class authMiddleware {
  static authorization = (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) {
      return res.sendStatus(401);
    }
    try {
      const data = jwt.verify(token, process.env.JWT_AUTH_SECRET);
      req.adminId = data.id;
      return next();
    } catch {
      return res.sendStatus(401);
    }
  };
}
module.exports = authMiddleware;
