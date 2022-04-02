const express = require("express");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const Student = require("./helper/db");
const db = require("./helper/db");

const app = express();

const PORT = 8888;

app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(
  express.static(path.join(__dirname, "public"), {
    index: false,
    extensions: ["html"],
  })
);

app.get("/", (req, res) => {
  Student.find({}, (err, student) => {
    res.render("index", { student: student });
  });
});

app.get("/create", (req, res) => {
  res.render("create");
});

//Create and save new student
app.post("/create_student", (req, res) => {
  const student = new Student(req.body);
  student.save();

  Student.find({}, (err, student) => {
    if (!err) {
      console.log("success");
      res.render("index", { student: student });
    } else {
      console.log("error is", err);
    }
  });
});

// Delete a student by ID
app.get("/delete/:id", (req, res) => {
  Student.findByIdAndDelete(req.params.id, (err) => {
    err ? console.error(err) : console.log("successfully deleted");

    res.redirect("/");
  });
});

app.get("/update_student/:id", (req, res) => {
  Student.find({}, (err, student) => {
    Student.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      (err, result) => {
        if (!err) {
          res.render("update", { student: student });
          console.log("successfully edited");
        } else {
          console.log(err);
        }
      }
    );
  });
});

app.post("/update_student/:id", (req, res) => {
  Student.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    (err, result) => {
      if (!err) {
        res.redirect("/");
        console.log("successfully edited");
      } else {
        console.log(err);
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
