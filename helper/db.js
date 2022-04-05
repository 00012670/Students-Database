const mongoose = require("mongoose");
const MONGODB_URI = `mongodb+srv://00012670:9919813d@cluster0.vihzt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_URI || "mongodb://localhost:27017/Students");

const Student = mongoose.model("Students", {
  Student_name: String,
  Student_email: String,
  Student_level: String,
  Student_course: String,
  Student_gender: String,
  Student_status: String,
});

module.exports = Student;
