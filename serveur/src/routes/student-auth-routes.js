const { body, validationResult } = require('express-validator');
const express =require ("express")
const userAuth =require ("../controllers/student-auth-controllers")
const studentRoutes = express.Router()

studentRoutes.post("/signup",body("email").isEmail().withMessage("email must be valid"),body("password").trim().isLength({min:5,max:20}).withMessage("password must be valid"),userAuth.signup)
studentRoutes.post("/signout",userAuth.signout)
module.exports=studentRoutes