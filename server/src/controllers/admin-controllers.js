const Course = require("../models/course-model");
const Student = require("../models/student-auth-model");
const Teacher = require("../models/Teacher-auth-model");
const jwt = require("jsonwebtoken");

exports.allTeachers = async (req, res) => {
  const teachers = await Teacher.find({});
  res.status(200).send(teachers);
};
exports.allUsers = async (req, res) => {
  const users = await Student.find({});
  res.status(200).send(users);
};
exports.allCourses = async (req, res) => {
  const course = await Course.find({}).populate("teacher");
  res.status(200).send(course);
};
exports.blockTeacher = async (req, res) => {
  const existingTeacher = await Teacher.findOne({ _id: req.params.id });
  if (existingTeacher.blocked) {
    const user = await Teacher.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          blocked: false,
        },
      }
    );
    return res.status(200).send(user);
  }
  const user = await Teacher.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        blocked: true,
      },
    }
  );
  return res.status(200).send(user);
};
exports.blockUser = async (req, res) => {
  const existingStudent = await Student.findOne({ _id: req.params.id });
  if (existingStudent.blocked) {
    const user = await Student.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          blocked: false,
        },
      }
    );
    return res.status(200).send(user);
  }
  const user = await Student.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        blocked: true,
      },
    }
  );
  return res.status(200).send(user);
};
exports.signin = async (req, res) => {
  if (process.env.GMAIL_ADDRESS !== req.body.email) {
    return res.status(400).send([{ error: "invalid credentials" }]);
  }
  if (process.env.PASSWORD !== req.body.password) {
    return res.status(400).send([{ error: "password mismatched" }]);
  }
  const userJwt = jwt.sign(
    {
      email: process.env.GMAIL_ADDRESS,
      password: process.env.GMAIL_PASSWORD,
    },
    process.env.JWT_KEY_ADMIN
  );
  req.session = {
    jwt: userJwt,
  };
  return res
    .status(200)
    .send({ email: req.body.email, password: req.body.password });
};

exports.deleteCourse = async (req, res) => {
  const existCourse = Course.findById({ _id: req.params.id });
  if (!existCourse) {
    return res.status(400).send([{ message: "Course not found" }]);
  }
  const course = await Course.deleteOne({ _id: req.params.id });
  return res.status(200).send([{ message: "Course deleted successfully" }]);
};
exports.signout = async function (req, res) {
  req.session = null;
  res.send({});
};
