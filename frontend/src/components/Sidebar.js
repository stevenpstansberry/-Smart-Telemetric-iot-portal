import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";
import { Box, Toolbar, Divider } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard"; // Example icons
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import BuildIcon from "@mui/icons-material/Build";

const collapsedWidth = 60; // Set the permanently collapsed width

const Sidebar = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Permanently Collapsed Sidebar Drawer */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: collapsedWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: collapsedWidth, // Permanently collapsed width
            overflowX: "hidden", // Prevent horizontal scrolling
          },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button component={Link} to="/lighting-control">
            <ListItemIcon>
              <LightbulbIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button component={Link} to="/music-control">
            <ListItemIcon>
              <MusicNoteIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button component={Link} to="/device-management">
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
