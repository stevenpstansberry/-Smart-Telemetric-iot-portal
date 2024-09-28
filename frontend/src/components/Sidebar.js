import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Box, Toolbar, Divider } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard"; // Example icons
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import BuildIcon from "@mui/icons-material/Build";

const drawerWidth = 240; // Expanded width
const collapsedWidth = 60; // Collapsed width

const Sidebar = () => {
  const [open, setOpen] = useState(true); // Sidebar is open by default

  const toggleDrawer = () => {
    setOpen(!open); // Toggle between open and collapsed state
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        anchor="left"
        open={open}
        sx={{
          width: open ? drawerWidth : collapsedWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? drawerWidth : collapsedWidth,
            transition: "width 0.3s", // Smooth transition for collapsing and expanding
            overflowX: "hidden",
          },
        }}
      >
        <Toolbar>
          {/* Collapse/Expand Button */}
          <IconButton onClick={toggleDrawer}>
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Dashboard" />}
          </ListItem>
          <ListItem button component={Link} to="/lighting-control">
            <ListItemIcon>
              <LightbulbIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Lighting Control" />}
          </ListItem>
          <ListItem button component={Link} to="/music-control">
            <ListItemIcon>
              <MusicNoteIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Music Control" />}
          </ListItem>
          <ListItem button component={Link} to="/device-management">
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Device Management" />}
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
