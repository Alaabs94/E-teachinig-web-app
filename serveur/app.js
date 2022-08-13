const express = require ("express");
const { json } = require ("body-parser");
const studentRouter = require ("./src/routes/student-auth-routes")

const cookieSession = require ("cookie-session");

const app = express();

app.use(json());
app.use(
    cookieSession({
      signed: false,
      secure: false,
      // secure: process.env.NODE_ENV !== "test",
    })
  );
  // console.log(process.env.NODE_ENV);
  // console.log(process.env.JWT_KEY);
  app.use("/student",studentRouter);
//   app.use(signinRouter);
//   app.use(signoutRouter);
//   app.use(signupRouter);
  
  app.get("*", async (req,res) => {
   res.status(404).send([{message:"route not found"}])
  });
//   app.use(errorHandler);
  module.exports = app ;