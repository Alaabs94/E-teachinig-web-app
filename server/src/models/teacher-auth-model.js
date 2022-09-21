const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const password = require("../midellwares/password");
const TeacherSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    description: { type: String, default: "Add some description here" },
    picture: {
      type: String,
      default:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp",
    },
    blocked: { type: Boolean, default: false },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);
TeacherSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await password.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done();
});
TeacherSchema.statics.build = (attrs) => {
  return new Teacher(attrs);
};
const Teacher = mongoose.model("Teacher", TeacherSchema);
module.exports = Teacher;
