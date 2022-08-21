const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
    description: { type: String, default: "Add some description here" },
    picture: {
      type: String,
      default:
        "https://petite-ecole-francaise.com/wp-content/uploads/2017/04/cours_francais_enfants-300x300.jpg",
    },
    field: { type: String, default: "development" },
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

CourseSchema.statics.build = (attrs) => {
  return new course(attrs);
};
const course = mongoose.model("Course", CourseSchema);
module.exports = course;
