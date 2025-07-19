import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./pages/Home";
import PasswordManager from "./pages/PasswordManager";
import PasswordGenerator from "./pages/PasswordGenerator";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />

        <Route path="/manager" element={
          <ProtectedRoute>
            <PasswordManager />
          </ProtectedRoute>
        } />

        <Route path="/generator" element={
          <ProtectedRoute>
            <PasswordGenerator />
          </ProtectedRoute>
        } />

        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
