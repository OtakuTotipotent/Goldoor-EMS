import { useContext, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  // Data retrieval
  // setLocalStorage();
  const authData = useContext(AuthContext);
  const [user, setUser] = useState(() => {
    const loggedUser = localStorage.getItem("loggedInUser");
    if (loggedUser) {
      return JSON.parse(loggedUser);
    } else return null;
  });
  const [activeUserData, setActiveUserData] = useState(null);

  // Login methods
  const handleLogin = (email, password) => {
    if (email == "admin1@gmail.com" && password == "321") {
      setUser({ role: "admin" });
      // setActiveUserData(admin);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email == e.email && password == e.password,
      );
      if (employee) {
        setUser({ role: "employee" });
        setActiveUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" }),
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  // Components
  if (!user) {
    return <Login handleLogin={handleLogin} />;
  }
  return (
    <>
      {user.role === "admin" ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard data={activeUserData} />
      )}
    </>
  );
};

export default App;
