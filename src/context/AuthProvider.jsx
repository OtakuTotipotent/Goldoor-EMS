import { useState } from "react";
import { getLocalStorage } from "../utils/localStorage";
import { createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData] = useState(() => getLocalStorage());

  return (
    <>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </>
  );
};

export { AuthContext, AuthProvider };
