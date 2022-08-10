const Student = require("../models/student-auth-model")
const dotenv = require('dotenv').config()
const jwt = require("jsonwebtoken")
const {validationResult } = require('express-validator');

exports.test = function (req,res)  {
    res.send("hi my server is working")
    console.log(req.body.email)
    console.log(req.params.id)
}
exports.signup = async function (req,res)  {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    
    console.log(req.body.email)
    const {email,password,firstname,lastname} = req.body
    const existingStudent = await Student.findOne({ email })
    if (existingStudent) {
        res.send('user exist already')
        }
        const user = Student.build({ email, password,firstname,lastname });
        await user.save();
        const userJwt = jwt.sign(
          { id: user._id, email: user.email, password: user.password },
          process.env.JWT_KEY
        );
        // @ts-ignore
        req.session = {
          jwt: userJwt,
        };
    
        res.status(201).send(user);       
}
exports.signout = async function (req,res)  {
    req.session = null;
  res.send({});
}
