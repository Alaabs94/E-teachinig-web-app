const { body } = require("express-validator");
const express = require("express");
const course = require("../controllers/course-controllers");
const courseRoutes = express.Router();
const midUser = require("../midellwares/currentuser");

courseRoutes.post(
  "/create",

  body("name")
    .trim()
    .isLength({ min: 3, max: 20 })
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
courseRoutes.delete(
  "/delete/:id",
  body("name")
    .trim()
    .isLength({ min: 5, max: 20 })
    .withMessage("name must be valid"),
  midUser.currentuser,
  midUser.passports,
  course.deleteCourse
);
courseRoutes.get("/show", course.getAll);
module.exports = courseRoutes;
