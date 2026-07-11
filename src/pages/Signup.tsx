import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState("")

 const handleSignup = () => {
   setError("");

   // Empty fields
   if (!name || !email || !password) {
     setError("Please fill all fields");
     return;
   }

   // Email validation
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if (!emailRegex.test(email)) {
     setError("Please enter a valid email address");
     return;
   }

   // Password length
   if (password.length < 6) {
     setError("Password must be at least 6 characters");
     return;
   }

   // Check if email already exists
   const savedUser = JSON.parse(localStorage.getItem("user") || "{}");

   if (savedUser.email === email) {
     setError("Email already exists");
     return;
   }

   const user = {
     name,
     email,
     password,
   };

   localStorage.setItem("user", JSON.stringify(user));

   navigate("/login");
 };
    
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Create Account</h1>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
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

        <button onClick={handleSignup}>Sign Up</button>

        <p>
          Already have an account?
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
