import React, { useState } from "react";
import "./AddStudent.css";

function AddStudentForm({ onAddStudent }) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phonenumber: "",
    Address: "",
    roomNumber: "",
    CollageID: "",
    Course: "",
    Year: "",
    ParentName: "",
    ParenttNumber: "",
    ParentEmail: "",
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent(student);
    setStudent({
      name: "",
      email: "",
      phonenumber: "",
      Address: "",
      roomNumber: "",
      CollageID: "",
      Course: "",
      Year: "",
      ParentName: "",
      ParenttNumber: "",
      ParentEmail: "",
    });
    onAdd({ username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <h1>Add Student</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={student.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="number"
            name="Phone"
            value={student.phonenumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="Address"
            value={student.Address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Room Number:
          <input
            type="text"
            name="roomNumber"
            value={student.roomNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          College Id:
          <input
            type="text"
            name="ID"
            value={student.CollageID}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          College Course:
          <input
            type="text"
            name="Course"
            value={student.Course}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Year:
          <input
            type="text"
            name="Year"
            value={student.Year}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Guardian/Parent Name:
          <input
            type="text"
            name="ParentName"
            value={student.ParentName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Guardian/Parent Email:
          <input
            type="text"
            name="ParentEmail"
            value={student.ParentEmail}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Guardian/Parent Phone:
          <input
            type="text"
            name="ParentPhone"
            value={student.ParenttNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Add Student</button>
      </form>
    </>
  );
}

export default AddStudentForm;
