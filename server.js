const express = require("express");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const Student = require("./helper/db");
const db = require("./helper/db");

const app = express();

const PORT = 3000;

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
  res.redirect("/");
});

// Delete a student by ID
app.get("/delete/:id", (req, res) => {
  Student.findByIdAndDelete(req.params.id, (err) => {
    err ? console.error(err) : console.log("successfully deleted");

    res.redirect("/");
  });
});

//Update the student
app.get("/update_student/:id", (req, res) => {
  Student.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    (err, result) => {
      if (!err) {
        console.log(result);
        res.render("update", { student: result });
        console.log("Successfully edited");
      } else {
        console.log(err);
      }
    }
  );
});

app.post("/update_student/:id", (req, res) => {
  Student.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    (err, result) => {
      if (!err) {
        res.redirect("/");
        console.log("Successfully edited");
      } else {
        console.log(err);
      }
    }
  );
});

// Sorting methods by Courses
app.get("/Business%20Information%20Systems", (req, res) => {
  Student.find({ Student_course: "BIS" }, (err, student) => {
    res.render("index", { student: student });
  });
});

app.get("/Finance", (req, res) => {
  Student.find({ Student_course: "Fin" }, (err, student) => {
    res.render("index", { student: student });
  });
});

app.get("/Economics%20With%20Finance", (req, res) => {
  Student.find({ Student_course: "ECwF" }, (err, student) => {
    res.render("index", { student: student });
  });
});

app.get("/Business%20Management", (req, res) => {
  Student.find({ Student_course: "BM" }, (err, student) => {
    res.render("index", { student: student });
  });
});
app.get("/Commercial%20Law", (req, res) => {
  Student.find({ Student_course: "CL" }, (err, student) => {
    res.render("index", { student: student });
  });
});

// Search by Name
app.get("/search", (req, res) => {
  let name = req.query.find;

  Student.find({ Student_name: name }, (err, student) => {
    if (student.length == 0) {
      res.render("notfound");
    } else {
      res.render("index", { student: student });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
