const { body, validationResult } = require("express-validator");
const express = require("express");
const userAuth = require("../controllers/teacher-auth-controllers");
const teacherRoutes = express.Router();
const midUser = require("../midellwares/currentuser");

teacherRoutes.post(
  "/signup",
  body("email").isEmail().withMessage("email must be valid"),
  body("password")
    .trim()
    .isLength({ min: 5, max: 20 })
    .withMessage("password must be valid"),
  userAuth.signup
);
teacherRoutes.get("/signout", userAuth.signout);
teacherRoutes.post("/signin", userAuth.signin);
teacherRoutes.get("/currentuser", midUser.currentuser, userAuth.currentTeacher);
teacherRoutes.put(
  "/editteacher",
  body("password")
    .trim()
    .isLength({ min: 5, max: 20 })
    .withMessage("password must be valid"),
  midUser.currentuser,
  midUser.passports,
  userAuth.editTeacher
);

module.exports = teacherRoutes;
