import { useContext, useState } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  // Data retrieval
  const authData = useContext(AuthContext);
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      try {
        const loggedInUser = JSON.parse(storedUser);
        return loggedInUser.role;
      } catch (error) {
        console.error("Failed to parse user from local storage:", error);
        return null;
      }
    }
    return null;
  });

  // Login methods
  const handleLogin = (email, password) => {
    if (email === "admin1@gmail.com" && password == "321") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (
      authData &&
      authData.employees.find(
        (e) => email === e.email && password === e.password,
      )
    ) {
      setUser("employee");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee" }),
      );
    } else {
      setUser(null);
      alert("Invalid Credentials");
    }
  };

  // Components
  if (!user) {
    return <Login handleLogin={handleLogin} />;
  }

  return <>{user === "admin" ? <AdminDashboard /> : <EmployeeDashboard />}</>;
};

export default App;
