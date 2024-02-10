const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
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
  students:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  }]
});

module.exports = mongoose.model('Admin', adminSchema);
