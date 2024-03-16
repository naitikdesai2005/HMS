import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Complain from "./pages/Complain";
import Billpay from "./pages/Billpay";
import Food from "./pages/Food";
import Leave from "./pages/Leave";
import NoticeBord from "./pages/NoticeBord";
import UpdateProfile from "./pages/UpdateProfile";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Complain" element={<Complain />} />
          <Route path="/Billpay" element={<Billpay />} />
          <Route path="/Food" element={<Food />} />
          <Route path="/Leave" element={<Leave />} />
          <Route path="/NoticeBord" element={<NoticeBord />} />
          <Route path="/UpdateProfile" element={<UpdateProfile />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

// const LoginForm = ({ onLogin }) => {
//   const [username, setUsername] = useState("admin");
//   const [password, setPassword] = useState("admin");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username.trim() === "admin" && password.trim() === "admin") {
//       onLogin();
//     } else {
//       alert("Invalid username or password");
//     }
//   };

//   return (
//     <div className="center login-form">
//       <h2>Student Login</h2>
//       <br />
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// const LoginPage = ({ onLogin }) => {
//   return (
//     <div>
//       <LoginForm onLogin={onLogin} />
//     </div>
//   );
// };

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   return isLoggedIn ? <AdminRoutes /> : <LoginPage onLogin={handleLogin} />;
// };

export default App;
