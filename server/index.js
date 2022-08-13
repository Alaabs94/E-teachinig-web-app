const Mongoose =require ("mongoose");
const  app  =require ("./app");
const dotenv = require('dotenv').config()



const start = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI  should be defined");
  }
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY  should be defined");
  }
  try {
    await Mongoose.connect(`${process.env.MONGO_URI}`);
    console.log("connected to mongodb");
  } catch (err) {
    console.error(err);
  }
};

app.listen(process.env.PORT , () => {
    console.log(" hi listening on 5000");
  });
  
  start();