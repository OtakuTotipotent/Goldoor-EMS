import { createContext, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData] = useState(() => getLocalStorage());

  // useEffect(() => {
  //   const { employees, admins } = getLocalStorage();
  //   setUserData({ employees, admins });
  // }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
