import React, { useState } from "react";
import "./Style.css"; // Import CSS file for styling

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [complaintType, setComplaintType] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Complaint Type:", complaintType);
  };

  return (
    <div className="App">
      <h1>Complaint Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Complaint Type</label>
          <br />
          <select
            value={complaintType}
            onChange={(e) => setComplaintType(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="electronic">Electronic</option>
            <option value="water">Water</option>
            <option value="workshop">Workshop</option>
          </select>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
