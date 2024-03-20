import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import * as React from "react";
import { useOutlet } from "react-router";
import Profile from "../basic/Profile";
import Footer from "./Footer";
import Header from "./Header";

const defaultTheme = createTheme();

export default function Layout() {
  const outlet = useOutlet();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <>{outlet || <Profile />}</>
        </Box>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
