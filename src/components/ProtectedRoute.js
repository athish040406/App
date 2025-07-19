import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/Auth";

function ProtectedRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
