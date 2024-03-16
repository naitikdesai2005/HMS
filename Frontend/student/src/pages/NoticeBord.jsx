import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Notice.css";

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await axios.get("http://localhost:3000/student/notice-board");
      setNotices(response.data.notices);
    } catch (error) {
      console.error("Error fetching notices:", error);
    }
  };

  return (
    <div className="notice-board">
      <h2>Notice Board</h2>
      <ul>
        {notices.map((notice, index) => (
          <li key={index}>
            <h1>{notice.title}</h1>
            <p>{notice.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoticeBoard;
