// Import necessary modules
const express = require('express');
const router = express.Router();
const passport = require('passport');


const Admin = require('../models/adminmodel');
const Student = require('../models/studentmodel');
const Complaint = require('../models/complaintmodel');
const Food = require('../models/foodmodel');
const Notice = require('../models/noticemodel');
const Leave = require('../models/leavemodel');


//---------------------------------------------------------------------------------------------------------------------

//deafult datas
router.get('/',(req,res)=>{
  res.render('index');
});

router.get('/defaultfood', async (req, res) => {
  const defaultFoodMenu = [
      { day: 'Monday', breakfast: 'Scrambled eggs', lunch: 'Chicken salad', dinner: 'Spaghetti Bolognese' },
      { day: 'Tuesday', breakfast: 'Pancakes', lunch: 'Vegetable soup', dinner: 'Grilled salmon' },
      { day: 'Wednesday', breakfast: 'Oatmeal', lunch: 'Tuna sandwich', dinner: 'Beef stir-fry' },
      { day: 'Thursday', breakfast: 'Bagel with cream cheese', lunch: 'Caesar salad', dinner: 'Vegetable lasagna' },
      { day: 'Friday', breakfast: 'French toast', lunch: 'Greek salad', dinner: 'BBQ ribs' },
      { day: 'Saturday', breakfast: 'Fruit smoothie', lunch: 'Quinoa salad', dinner: 'Shrimp scampi' },
      { day: 'Sunday', breakfast: 'Waffles', lunch: 'Caprese sandwich', dinner: 'Roast chicken' }
  ];

  try {
      const existingFoodMenu = await Food.find();
      if (existingFoodMenu.length === 0) {
          await Food.insertMany(defaultFoodMenu.map(item => ({ ...item, createdBy: 'admin' })));
          console.log('Default food menu data saved successfully.');
          res.send('Default food menu data saved successfully.');
      } else {
          console.log('Default food menu data already exists in the database.');
          res.send('Default food menu data already exists in the database.'); 
      }
  } catch (error) {
      console.error('Error saving default food menu data:', error);
      res.status(500).send('Error saving default food menu data.'); 
  }
});


router.get('/register-admin', async (req, res) => {
  try {
      const existingAdmin = await Admin.findOne();
      if (existingAdmin) {
          return res.send('Admin already registered.');
      }

      const adminData = {
          username: 'ADMIN123',
          password : 'ADMIN123',
          fullName: 'ADMIN ADMIN ADMIN',
          email: 'admin@example.com'
      };

      const admin = new Admin(adminData);
      await admin.setPassword("ADMIN123");
      await admin.save();
      res.send('Admin registered successfully.');

  } catch (error) {
      console.error('Error registering admin:', error);
      res.status(500).send('Internal Server Error');
  }
});


//---------------------------------------------------------------------------------------------------------------------

//Login

router.get('/admin/login', (req, res) => {
    res.render('adminLogin');
});

router.post('/admin/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await Admin.findByUsername(username);
        if (!admin) {
            return res.status(400).send('Invalid username or password');
        }
        admin.authenticate(password, (err, result) => {
            if (err || !result) {
                return res.status(400).send('Invalid username or password');
            }
            req.session.admin = admin;
            res.redirect('/admin/dashboard');
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});


router.get('/student/login', (req, res) => {
    res.render('studentLogin'); 
});


router.post('/student/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const student = await Student.findByUsername(username);
        if (!student) {
            return res.status(400).send('Invalid username or password');
        }
        student.authenticate(password, (err, result) => {
            if (err || !result) {
                return res.status(400).send('Invalid username or password');
            }
            req.session.student = student;
            res.redirect('/student/dashboard');
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});


router.get('/admin/students-data', async (req, res) => {
  try {
    const students = await Student.find();
    res.json({ students });
  } catch (error) {
    console.error('Error fetching student data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/admin/students/update/:id', async (req, res) => {
  const { id } = req.params;
  try {
      const student = await Student.findById(id);
      res.render('updateStudent', { student });
  } catch (error) {
      console.error('Error fetching student data for update:', error);
      res.status(500).send('Internal Server Error');
  }
});

router.post('/admin/students/update/:id', async (req, res) => {
  const { id } = req.params;
  const updatedStudentData = req.body;
  try {
      const updatedStudent = await Student.findByIdAndUpdate(id, updatedStudentData, { new: true });
      res.redirect('/admin/students-data');
  } catch (error) {
      console.error('Error updating student data:', error);
      res.status(500).send('Internal Server Error');
  }
});


router.get('/admin/dashboard', (req, res) => {
  res.render('adminDashboard'); 
});


router.get('/admin/leave-requests', (req, res) => {
  // Render page to manage leave requests
});


// Update Bills/Fees
router.get('/admin/update-bills-fees', (req, res) => {
  // Render form to update bills/fees
});



//--------------------------------------------------------------------------------------------------------------------
router.get('/student/dashboard', (req, res) => {
  res.render('studentDashboard');
});


// Food Menu
router.get('/student/food-menu', async (req, res) => {
  try { 
      const foodMenu = await Food.find();
      res.json({ foodMenu });
      // res.render('foodMenu-students', { foodMenu });
      
  } catch (error) {
      console.error('Error fetching food menu:', error);
      res.status(500).send('Internal Server Error');
  }
});

router.get('/admin/food-menu', async (req, res) => {
  try {
      const foodMenu = await Food.find();
      res.json({ foodMenu });
  } catch (error) {
      console.error('Error fetching food menu:', error);
      res.status(500).send('Internal Server Error');
  }
});

router.get('/admin/food-menu/update/:id', async (req, res) => {
  const { id } = req.params;
  try {
      const foodItem = await Food.findById(id);
      // res.render('updateFoodItem', { foodItem });
      res.json({foodItem});
  } catch (error) {
      console.error('Error fetching food item:', error);
      res.status(500).send('Internal Server Error');
  }
});

router.post('/admin/food-menu/update/:id', async (req, res) => {
  const { id } = req.params;
  const updatedFoodItem = req.body;
  try {
    const foodItem = await Food.findByIdAndUpdate(id, updatedFoodItem, { new: true });
    res.redirect('/admin/food-menu');
  } catch (error) {
    console.error('Error updating food menu item:', error);
    res.status(500).send('Internal Server Error');
  }
});
//--------------------------------------------------------------------------------------------------------------------

router.get('/admin/add-student', (req, res) => {
  res.render('addStudent'); 
});


router.post('/admin/add-student', async (req, res) => {
  const { username, password, fullName, email, phone, address, roomNo, collegeID, collegeCourse, year, guardianName, guardianPhone, guardianEmail } = req.body;
  try {
      const student = new Student({
          username,
          password,
          fullName,
          email,
          phone,
          address,
          roomNo,
          collegeID,
          collegeCourse,
          year,
          guardianName,
          guardianPhone,
          guardianEmail
      });
      await student.setPassword(req.body.password); 
      await student.save();

      res.redirect('/admin/dashboard');
  } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
  }
});


//--------------------------------------------------------------------------------------------------------------------
router.get('/admin/add-notice', (req, res) => {
  res.render('addNotice');
});

router.post('/admin/add-notice', async (req, res) => {
  const { title, content } = req.body;
  try {
    const newNotice = await Notice.create({ title, content });
    res.redirect('/admin/notices');
  } catch (error) {
    console.error('Error adding notice:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/admin/delete-notice/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Notice.findByIdAndDelete(id);
    res.redirect('/admin/notices');
  } catch (error) {
    console.error('Error deleting notice:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/admin/notices', async (req, res) => {
  try {
    const notices = await Notice.find();
    res.json({ notices });
    // res.render('notices', { notices });
  } catch (error) {
    console.error('Error fetching notices:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/student/notice-board', async (req, res) => {
  try {
    const notices = await Notice.find();
    res.json({notices});
    // res.render('studentNotices', { notices });
  } catch (error) {
    console.error('Error fetching notices:', error);
    res.status(500).send('Internal Server Error');
  }
});

//--------------------------------------------------------------------------------------------------------------

router.get('/student/leave', (req, res) => {
  res.render('leaveForm');
});

router.post('/student/leave', async (req, res) => {
  const { startDate, startTime, endDate, endTime, reason } = req.body;
  const student = req.user;
  
  try {
      const leave = new Leave({
          student: student._id,
          startDate,
          startTime,
          endDate,
          endTime,
          reason
      });
      await leave.save();
      res.redirect('/student/dashboard');
  } catch (error) {
      console.error('Error submitting leave request:', error);
      res.status(500).send('Internal Server Error');
  }
});

//--------------------------------------------------------------------------------------------------------------



module.exports = router;
