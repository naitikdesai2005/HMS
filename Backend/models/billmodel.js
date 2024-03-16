// Import mongoose
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/HMS-CWR");

// Define the bill/fees schema
const billSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  roomNo: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    enum: ['fee', 'bill'],
    required: true
  },
  status: {
    type: String,
    enum: ['paid', 'pending'],
    default: 'pending'
  }
}, { timestamps: true });

// Create the bill/fees model
const Bill = mongoose.model('Bill', billSchema);

// Export the model
module.exports = Bill;
