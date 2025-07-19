import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { setUserSession } from "../utils/Auth";
import "../App.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const registeredUser = JSON.parse(sessionStorage.getItem("registeredUser"));

    if (
      registeredUser?.email === form.email &&
      registeredUser?.password === form.password
    ) {
      setUserSession(form);
      navigate("/home");
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="container login-bg">
      <div className="form-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button type="submit">Login</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
