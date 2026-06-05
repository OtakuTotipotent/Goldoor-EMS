import { useState } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/Admin/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/Employee/EmployeeDashboard";

const App = () => {
  const [user, setUser] = useState(null);
  const handleLogin = (email, password) => {
    if (email == "admin1@gmail.com" && password == "321") {
      setUser("admin");
      console.log("admin");
    } else if (email == "user@gmail.com" && password == "123") {
      setUser("employee");
      console.log("employee");
    } else {
      setUser("intruder");
      console.log("intruder");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
};

export default App;
