const { body } = require("express-validator");
const express = require("express");
const course = require("../controllers/course-controllers");
const courseRoutes = express.Router();
const midUser = require("../midellwares/currentuser");

courseRoutes.post(
  "/create",

  body("name")
    .trim()
    .isLength({ min: 3, max: 50 })
    .withMessage("name must be valid"),
  midUser.currentuser,
  midUser.passports,
  course.creatCourse
);
courseRoutes.put(
  "/edit/:id",
  body("name")
    .trim()
    .isLength({ min: 5, max: 20 })
    .withMessage("name must be valid"),
  midUser.currentuser,
  midUser.passports,
  course.editCourse
);
courseRoutes.post(
  "/add/:id",

  midUser.currentUser2,
  midUser.passports,
  course.addSUbscriber
);
courseRoutes.post(
  "/remove/:id",

  midUser.currentUser2,
  midUser.passports,
  course.removeSUbscriber
);
courseRoutes.post(
  "/status/:id",

  midUser.currentUser2,
  midUser.passports,
  course.getStatus
);

courseRoutes.get("/show", course.getAll);
module.exports = courseRoutes;
