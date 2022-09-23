const Student = require("../models/student-auth-model");
const dotenv = require("dotenv").config();
const passwordChange = require("../midellwares/password");

const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const passwordMod = require("../midellwares/password");
const midUserc = require("../midellwares/currentuser");

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
  const existingStudent = await Student.findOne({ email });
  if (existingStudent) {
    return res.status(400).send([{ message: "user exist already" }]);
  }
  const user = Student.build({ email, password, firstname, lastname });
  await user.save();
  const userJwt = jwt.sign(
    {
      id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
      picture: user.picture,
    },
    process.env.JWT_KEY_USER
  );

  req.session = {
    jwt: userJwt,
  };

  res.status(201).send(user);
};

exports.signin = async function (req, res) {
  const { email, password } = req.body;
  const existUser = await Student.findOne({ email });
  if (!existUser) {
    return res.status(400).send([{ message: "invalid credentials" }]);
  }
  if (existUser.blocked === true) {
    return res.status(400).send([{ message: "You are temporarily blocked" }]);
  }
  const passwordMatch = await passwordMod.comparePasswords(
    existUser.password,
    password
  );
  if (!passwordMatch) {
    return res.status(400).send([{ message: "password mismatched" }]);
  }
  const userJwt = jwt.sign(
    {
      id: existUser.id,
      email: existUser.email,
      password: existUser.password,
      firstname: existUser.firstname,
      lastname: existUser.lastname,
      picture: existUser.picture,
    },
    process.env.JWT_KEY_USER
  );
  req.session = {
    jwt: userJwt,
  };
  res.status(200).send(existUser);
};
exports.currentUser = async function (req, res) {
  res.send({ currentuser: req.currentuser || null });
};
exports.signout = async function (req, res) {
  req.session = null;
  res.send({});
};

exports.editUser = async function (req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const validation = errors.array().map((err) => {
      return { message: err.msg, field: err.param };
    });
    return res.status(400).json(validation);
  }
  const changePassword = await passwordChange.toHash(req.body.password);
  const user = await Student.findByIdAndUpdate(
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
  const existUser = await Student.findOne({ email: req.currentuser.email });
  const userJwt = jwt.sign(
    {
      id: existUser.id,
      firstname: existUser.firstname,
      lastname: existUser.lastname,
      email: existUser.email,
      password: existUser.password,
      picture: existUser.picture,
    },
    process.env.JWT_KEY_USER
  );

  req.session = {
    jwt: userJwt,
  };

  res.status(201).send(user);
};
