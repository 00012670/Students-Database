const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Students");

const Student = mongoose.model("Students", {
  Student_name: String,
  Student_email: String,
  Student_level: String,
  Student_course: String,
  Student_gender: String,
  Student_status: String,
});

module.exports = Student;
