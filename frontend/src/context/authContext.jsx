import { createContext, useState, useContext } from "react";

import { useNavigate } from "react-router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (email, password) => {
    //TODO login axios a API
    //Si sale bien el login guardar en localstorage

    const user = {
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    navigate("/profile");
  };
  const logout = () => {
    setUser(null);

    //Borrar de localstorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
