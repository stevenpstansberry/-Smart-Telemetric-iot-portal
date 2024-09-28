// components/Navbar.js
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">Smart Room Portal</Typography>
    </Toolbar>
  </AppBar>
);

export default Navbar;
