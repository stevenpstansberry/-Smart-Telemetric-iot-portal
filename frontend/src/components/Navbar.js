import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Dark mode icon
import { Box } from "@mui/material";
import { useThemeContext } from "../util/ThemeContex";

const Navbar = () => {
  const { toggleTheme, isDarkMode } = useThemeContext();

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "flex-start", // Left justify title and icon
          alignItems: "center",
          width: "100%", // Ensure it spans the full width
          padding: "0 16px", // Padding for some spacing
        }}
      >
        {/* Left aligned box with the title and icon */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Title */}
          <Typography variant="h6" sx={{ marginRight: 2 }}>
            Smart Room Portal
          </Typography>

          {/* Toggle Theme Icon */}
          <IconButton
            color="inherit"
            onClick={toggleTheme}
            sx={{ marginLeft: "auto" }}
          >
            <Brightness4Icon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
