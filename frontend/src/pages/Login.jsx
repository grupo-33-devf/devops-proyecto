import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useState } from "react";
import { useAuth } from "../context/authContext";

const Login = () => {
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const fetchData = async () => {
      try {
        await login(formData.email, formData.password);
      } catch (error) {
        console.error("Error al hacer login", error);
      }
    };
    fetchData();
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={8}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          margin: 4,
        }}
      >
        <Typography variant="h5"> Iniciar Sesión</Typography>
        <TextField
          label="Correo"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Contraseña"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" onClick={handleLogin}>
          Iniciar sesión
        </Button>
      </Paper>
    </Container>
  );
};

export default Login;
