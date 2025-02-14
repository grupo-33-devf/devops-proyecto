import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider } from "@mui/material";

import { createTheme } from "@mui/material";

import "@fontsource/roboto/300.css";

import App from "./App.jsx";

const theme = createTheme({
  palette: {
    type: "light",
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
