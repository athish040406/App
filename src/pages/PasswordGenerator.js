import { useState } from "react";
import "../App.css";

function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [generated, setGenerated] = useState("");

  const generatePassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]";
    let password = "";
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGenerated(password);
  };

  return (
    <div className="generator-bg">
      <div className="generator-box">
        <h2>Password Generator</h2>
        <input
          type="number"
          min="4"
          max="32"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          placeholder="Password Length"
        />
        <button onClick={generatePassword}>Generate Password</button>
        {generated && (
          <div className="generated-password">
            <p>{generated}</p>
            <button onClick={() => navigator.clipboard.writeText(generated)}>
              Copy
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PasswordGenerator;
