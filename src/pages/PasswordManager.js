import { useState } from "react";
import "../App.css";

function PasswordManager() {
  const [passwords, setPasswords] = useState([]);
  const [form, setForm] = useState({ title: "", username: "", password: "" });
  const [strength, setStrength] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "password") checkStrength(e.target.value);
  };

  const checkStrength = (pass) => {
    if (pass.length < 6) return setStrength("Weak");
    if (/[A-Z]/.test(pass) && /[0-9]/.test(pass) && /[^A-Za-z0-9]/.test(pass)) return setStrength("Strong");
    if (/[A-Z]/.test(pass) || /[0-9]/.test(pass)) return setStrength("Medium");
    setStrength("Weak");
  };

  const addPassword = () => {
    if (!form.title || !form.username || !form.password) return alert("Please fill all fields");
    const newPassword = { id: Date.now(), ...form };
    setPasswords([...passwords, newPassword]);
    setForm({ title: "", username: "", password: "" });
    setStrength("");
  };

  const deletePassword = (id) => {
    setPasswords(passwords.filter((p) => p.id !== id));
  };

  return (
    <div className="container manager-advanced-bg">
      <div className="manager-advanced-box">
        <h2>Advanced Password Manager</h2>
        <div className="form-inline-advanced">
          <input
            name="title"
            type="text"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
          />
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          {form.password && (
            <p className={`strength ${strength.toLowerCase()}`}>Strength: {strength}</p>
          )}
          <button onClick={addPassword}>Add Password</button>
        </div>

        <div className="password-list">
          {passwords.length === 0 ? (
            <p>No passwords saved yet!</p>
          ) : (
            passwords.map((p) => (
              <div className="password-card-advanced" key={p.id}>
                <div>
                  <h4>{p.title}</h4>
                  <p><strong>User:</strong> {p.username}</p>
                  <p><strong>Pass:</strong> {p.password}</p>
                </div>
                <button onClick={() => deletePassword(p.id)}>Delete</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default PasswordManager;
