const { body } = require("express-validator");
const express = require("express");
const userAuth = require("../controllers/student-auth-controllers");
const studentRoutes = express.Router();
const midUser = require("../midellwares/currentuser");

studentRoutes.post(
  "/signup",
  body("email").isEmail().withMessage("email must be valid"),
  body("password")
    .trim()
    .isLength({ min: 5, max: 20 })
    .withMessage("password must be valid"),
  userAuth.signup
);
studentRoutes.get("/signout", userAuth.signout);
studentRoutes.post("/signin", userAuth.signin);
studentRoutes.get(
  "/currentuser",
  midUser.currentUser2,

  userAuth.currentUser
);
studentRoutes.put(
  "/edituser",

  body("password")
    .trim()
    .isLength({ min: 5, max: 20 })
    .withMessage("password must be valid"),
  midUser.currentUser2,
  midUser.passports,
  userAuth.editUser
);

module.exports = studentRoutes;
