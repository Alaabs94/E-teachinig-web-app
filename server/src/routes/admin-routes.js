const express = require("express");
const midUser = require("../midellwares/currentuser");
const adminAuth = require("../controllers/admin-controllers");
const adminRoutes = express.Router();
adminRoutes.get(
  "/student",
  midUser.currentAdmin,
  midUser.passports,
  adminAuth.allUsers
);
adminRoutes.get(
  "/teacher",
  midUser.currentAdmin,
  midUser.passports,
  adminAuth.allTeachers
);
adminRoutes.get(
  "/course",
  midUser.currentAdmin,
  midUser.passports,
  adminAuth.allCourses
);

adminRoutes.get(
  "/student/:id",
  midUser.currentAdmin,
  midUser.passports,
  adminAuth.blockUser
);
adminRoutes.get(
  "/teacher/:id",
  midUser.currentAdmin,
  midUser.passports,
  adminAuth.blockTeacher
);
adminRoutes.post("/signin", adminAuth.signin);

adminRoutes.get(
  "/course/:id",
  midUser.currentAdmin,
  midUser.passports,
  adminAuth.deleteCourse
);
adminRoutes.get("/signout", adminAuth.signout);
module.exports = adminRoutes;
