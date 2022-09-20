const Mongoose = require("mongoose");
const app = require("./app");

console.log("MONGO_URI", process.env.URI);

const start = async () => {
  if (!process.env.URI) {
    throw new Error("MONGO_URI  should be defined");
  }
  if (!process.env.JWT_KEY_USER) {
    throw new Error("MONGO_URI  should be defined");
  }
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY  should be defined");
  }
  try {
    await Mongoose.connect(`${process.env.URI}`);
    console.log("connected to mongodb");
  } catch (err) {
    console.error(err);
  }
};

app.listen(process.env.PORT, () => {
  console.log(" hi listening on 5000");
});

start();
