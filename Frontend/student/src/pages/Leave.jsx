// import React from 'react';

// const Leave = () =>{
//     return(
//         <div>
//             <h1>Leave</h1>
//         </div>
//     )
// }

// export default Leave

import React, { useState } from "react";
import "./Leave.css";

const LeaveForm = () => {
  const [leaveType, setLeaveType] = useState("");
  const [place, setPlace] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Leave Type:", leaveType);
  };

  return (
    <div className="leave-form-container">
      <h1>Leave Application Form</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Leave Type</label>
          {/* <input
            type="text"
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
            required
          />  */}
          <select
            value={leaveType}
            onChange={(e) => setComplaintType(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="Home">Home</option>
            <option value="College off">College off</option>
            <option value="Sunday">Sunday</option>
          </select>
        </div>
        <br />
        <div className="form-group">
          <label>Place</label>
          <input
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            required
          />
        </div>
        <br />
        <div className="form-group">
          <label>From Date</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            required
          />
        </div>
        <br />
        <div className="form-group">
          <label>To Date</label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            required
          />
          <br />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LeaveForm;
