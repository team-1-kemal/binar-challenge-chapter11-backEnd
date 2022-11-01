const jwt = require("jsonwebtoken");

module.exports = verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.status(401).send("token is required for authnetication");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = decoded.data;
    req.token = token;
    return next();
  } catch (err) {
    return res.status(403).send("token is invalid");
  }
};
