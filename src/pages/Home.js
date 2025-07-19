import { removeUserSession } from "../utils/Auth";
import { useNavigate, Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeUserSession();
    navigate("/login");
  };

  return (
    <div className="manager-advanced-bg">
      <div className="home-box">
        <h1>Welcome to Home!</h1>
        <div className="button-group">
          <Link to="/manager">
            <button className="home-btn">Password Manager</button>
          </Link>
          <Link to="/generator">
            <button className="home-btn">Password Generator</button>
          </Link>
        </div>
        <button className="home-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Home;
