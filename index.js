var express = require('express');
var router = express.Router();

const studentModel = require("./users");
const adminModel = require("./admin1");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createstudent', async function(req, res, next) {
  let createdstudent = await studentModel.create({
    username: "naitik",
    password: "naitik",
    fullName: "naitik riteshbhai desai",
    email: "naitik@mail.com",
    phoneNumber: "1234567890",
    admins: "65c79cbe9ab86d0ef061dba3", // array of admin usernames who can access this user's info
    roomNumber: "317",
    collegeProgram: "B.Tech CE, CSPIT",
    collegeId:"22CE024"
  });
  //res.send(createdstudent);

   // students: [] // Initialize students as an empty array
let st = await  studentModel.findOne({admins:"65c79cbe9ab86d0ef061dba3"});
  st.students.push(createdstudent._id);
  await st.save();
});

router.get('/createadmin', async function(req, res, next) {
  let createadmin1 = await adminModel.create({
    username: "admin123",
    password: "admin",
    fullName: "admin1 admin2 admin3",
    students:[]
  });
  res.send(createadmin1);
});


module.exports = router;
