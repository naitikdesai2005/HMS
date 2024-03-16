// Import mongoose
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/HMS-CWR");
// Define the complaint schema
const complaintSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  roomNo: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['estate', 'food', 'cleaning', 'misbehavior'],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'resolved'],
    default: 'pending'
  }
}, { timestamps: true });

// Create the complaint model
const Complaint = mongoose.model('Complaint', complaintSchema);

// Export the model
module.exports = Complaint;
