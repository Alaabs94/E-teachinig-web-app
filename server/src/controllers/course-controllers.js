const Course = require("../models/course-model");
const dotenv = require("dotenv").config();
const { validationResult } = require("express-validator");

exports.creatCourse = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const validation = errors.array().map((err) => {
      return { message: err.msg, field: err.param };
    });
    return res.status(400).send(validation);
  }
  const { name, teacher, description, picture, field, videos } = req.body;

  const course = Course.build({
    name,
    teacher,
    description,
    picture,
    field,
    videos,
  });
  await course.save();
  return res.status(200).send(course);
};
exports.editCourse = async (req, res) => {
  const errors = validationResult(req);

  const { name, teacher, description, picture, field, videos } = req.body;

  if (!errors.isEmpty()) {
    const validation = errors.array().map((err) => {
      return { message: err.msg, field: err.param };
    });
    return res.status(400).send(validation);
  }
  const existCourse = Course.findById({ _id: req.params.id });
  if (!existCourse) {
    return res.status(400).send([{ message: "Course not found" }]);
  }
  const course = await Course.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name,
        teacher,
        description,
        picture,
        field,
        videos,
      },
    }
  );
  return res.status(200).send(course);
};
exports.deleteCourse = async (req, res) => {
  const existCourse = Course.findById({ _id: req.params.id });
  if (!existCourse) {
    return res.status(400).send([{ message: "Course not found" }]);
  }
  const course = await Course.deleteOne({ _id: req.params.id });
  return res.status(200).send([{ message: "Course deleted successfully" }]);
};
exports.addSUbscriber = async (req, res) => {
  const course = await Course.findOne({ _id: req.params.id });

  if (!course.users.includes(req.body.id)) {
    const subscriber = await Course.updateOne(
      { _id: req.params.id },
      {
        $push: {
          users: req.body.id,
        },
      }
    );
    return res.status(201).send({ subscription: true });
  } else if (course.users.includes(req.body.id)) {
    const subscriber = await Course.updateOne(
      { _id: req.params.id },
      {
        $pull: {
          users: req.body.id,
        },
      }
    );
    return res.status(201).send({ subscription: false });
  } else {
    return res.status(400).send([{ message: "Something went Wrong" }]);
  }
};
exports.removeSUbscriber = async (req, res) => {
  const course = await Course.findOne({ _id: req.params.id });

  if (!course.users.includes(req.body.id)) {
    return res
      .status(401)
      .send([{ message: "You are  not subscribed to remove subscription" }]);
  }

  return res.status(400).send([{ message: "Something went Wrong" }]);
};
exports.getStatus = async (req, res) => {
  const course = await Course.findOne({ _id: req.params.id });
  if (course.users.includes(req.body.id)) {
    return res.status(201).send({ subscription: true });
  } else if (!course.users.includes(req.body.id)) {
    return res.status(201).send({ subscription: false });
  } else {
    return res.status(400).send([{ message: "Something went Wrong" }]);
  }
};
exports.getAll = async (req, res) => {
  const course = await Course.find({}).populate("teacher");
  res.status(200).send(course);
};
