const Teacher = require("../models/Teacher-auth-model");
const dotenv = require("dotenv").config();
const passwordChange = require("../midellwares/password");

const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const passwordMod = require("../midellwares/password");

exports.test = function (req, res) {
  res.send("hi my server is working");
  console.log(req.body.email);
  console.log(req.params.id);
};
exports.signup = async function (req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const validation = errors.array().map((err) => {
      return { message: err.msg, field: err.param };
    });
    return res.status(400).json(validation);
  }

  console.log(req.body.email);
  const { email, password, firstname, lastname } = req.body;
  const existingTeacher = await Teacher.findOne({ email });
  if (existingTeacher) {
    return res.status(400).send([{ message: "user exist already" }]);
  }
  const user = Teacher.build({ email, password, firstname, lastname });
  await user.save();
  const userJwt = jwt.sign(
    { id: user._id, email: user.email, password: user.password },
    process.env.JWT_KEY
  );

  req.session = {
    jwt: userJwt,
  };

  res.status(201).send(user);
};

exports.signin = async function (req, res) {
  const { email, password } = req.body;
  const existUser = await Teacher.findOne({ email });
  if (!existUser) {
    return res.status(400).send([{ error: "invalid credentials" }]);
  }
  const passwordMatch = await passwordMod.comparePasswords(
    existUser.password,
    password
  );
  if (!passwordMatch) {
    return res.status(400).send([{ error: "password mismatched" }]);
  }
  const userJwt = jwt.sign(
    { id: existUser.id, email: existUser.email, password: existUser.password },
    process.env.JWT_KEY
  );
  req.session = {
    jwt: userJwt,
  };
  res.status(200).send(existUser);
};
exports.currentTeacher = async function (req, res) {
  res.send({ currentuser: req.currentuser || null });
};
exports.signout = async function (req, res) {
  req.session = null;
  res.send({});
};

exports.editTeacher = async function (req, res) {
  const errors = validationResult(req);
  console.log(req.body.email);
  const { email } = req.body;

  if (!errors.isEmpty()) {
    const validation = errors.array().map((err) => {
      return { message: err.msg, field: err.param };
    });
    return res.status(400).json(validation);
  } else {
    const changePassword = await passwordChange.toHash(req.body.password);
    const user = await Teacher.findByIdAndUpdate(
      { _id: req.currentuser.id },
      {
        $set: {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          password: changePassword,
          description: req.body.description,
          picture: req.body.picture,
        },
      }
    );

    const userJwt = jwt.sign(
      {
        id: user._id,
        email: user.email,
        password: user.password,
      },
      process.env.JWT_KEY
    );

    req.session = {
      jwt: userJwt,
    };

    res.status(201).send(user);
  }
};
