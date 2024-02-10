const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/studentportalpractice1");
const studentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: { 
    type: String,
    required: true,
    unique: true
  },
  admins: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin'
  }, // array of admin usernames who can access this user's info
  roomNumber: {
    type: String,
    required: true
  },
  collegeProgram: {
    type: String,
    required: true
  },
  collegeId: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('Student', studentSchema);