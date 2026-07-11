import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
   const { login } = useAuth();
   const navigate = useNavigate();

 const handleLogin = () => {
   setError("");

   if (!email || !password) {
     setError("Please fill all fields");
     return;
   }

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if (!emailRegex.test(email)) {
     setError("Please enter a valid email address");
     return;
   }

   const savedUser = JSON.parse(localStorage.getItem("user") || "{}");

   if (savedUser.email !== email) {
     setError("Email not found");
     return;
   }

   if (savedUser.password !== password) {
     setError("Incorrect password");
     return;
   }

   login(email);
   navigate("/");
 };

  return (
    <div className="login-container">
      <h1>Login</h1>

      <div className="login-form">
        <input
          type="email"
          placeholder="@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>

      <p className="login-footer">
        New Customer? <span onClick={() => navigate("/signup")}>Sign Up</span>
      </p>
    </div>
  );
};

export default Login;
