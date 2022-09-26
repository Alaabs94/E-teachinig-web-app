const jwt = require("jsonwebtoken");
exports.currentuser = (req, res, next) => {
  if (!req.session.jwt) {
    return next();
  }
  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY);
    req.currentuser = payload;
  } catch (error) {}
  next();
};
exports.currentUser2 = (req, res, next) => {
  if (!req.session.jwt) {
    return next();
  }
  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY_USER);
    req.currentuser = payload;
  } catch (error) {}
  next();
};
exports.currentAdmin = (req, res, next) => {
  if (!req.session.jwt) {
    return next();
  }
  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY_ADMIN);
    req.currentuser = payload;
  } catch (error) {}
  next();
};
exports.passports = function (req, res, next) {
  if (!req.currentuser) {
    res.status(401).send([{ message: "Not authorized" }]);
  }
  next();
};
