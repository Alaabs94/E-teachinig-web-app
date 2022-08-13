const Student = require("../models/student-auth-model")
const dotenv = require('dotenv').config()
const jwt = require("jsonwebtoken")
const {validationResult } = require('express-validator');
const passwordMod= require ("../midellwares/password")
const midUserc=require("../midellwares/currentuser")

exports.test = function (req,res)  {
    res.send("hi my server is working")
    console.log(req.body.email)
    console.log(req.params.id)
}
exports.signup = async function (req,res)  {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const validation= errors.array().map(err => {
        return {message: err.msg, field: err.param }
      })
      return res.status(400).json(validation);
    }

    
    console.log(req.body.email)
    const {email,password,firstname,lastname} = req.body
    const existingStudent = await Student.findOne({ email })
    if (existingStudent) {

        res.status(400).send([{message:'user exist already'}])
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

exports.signin=async function(req,res){
 const {email,password,}=req.body
 const existUser= await Student.findOne({email})
 if(!existUser){
 res.status(400).send([{error:'invalid credentials'}])
 } 
 const  passwordMatch=await passwordMod.comparePasswords(existUser.password,password)
 if(!passwordMatch){
   res.status(400).send([{error:'password mismatched'}])

 }
 const userJwt=jwt.sign({id:existUser.id,email:existUser.email,password:existUser.password},process.env.JWT_KEY)
 req.session = {
  jwt: userJwt,
};
 res.status(200).send(existUser)


}
exports.currentUser = async function (req,res)  {
res.send({currentuser: req.currentuser || null});
}
exports.signout = async function (req,res)  {
  req.session = null;
res.send({});
}
