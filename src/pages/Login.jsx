import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!name || !email) {
      alert("Please enter name and email");
      return;
    }

    // for now store locally
    localStorage.setItem("user", JSON.stringify({ name, email }));

    navigate("/dashboard");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: "block", marginBottom: "10px", padding: "8px" }}
      />

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", marginBottom: "10px", padding: "8px" }}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
