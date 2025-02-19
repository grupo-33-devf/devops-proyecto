import { createContext, useState, useContext } from "react";

import { useNavigate } from "react-router";
import api from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(() => {
    const storedUser = localStorage.getItem("token");
    return storedUser;
  });

  const login = async (email, password) => {
    //TODO login axios a API
    //Si sale bien el login guardar en localstorage

    const { data } = await api.post("/auth/login", {
      email,
      password,
    });

    localStorage.setItem("token", data.token);
    setToken(data.token);
    navigate("/profile");
  };
  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");

    //Borrar de localstorage
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
