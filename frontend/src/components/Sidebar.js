// components/Sidebar.js
import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <Drawer variant="permanent" anchor="left">
    <List>
      <ListItem button component={Link} to="/">
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/lighting-control">
        <ListItemText primary="Lighting Control" />
      </ListItem>
      <ListItem button component={Link} to="/aquarium-monitoring">
        <ListItemText primary="Aquarium Monitoring" />
      </ListItem>
      <ListItem button component={Link} to="/music-control">
        <ListItemText primary="Music Control" />
      </ListItem>
      <ListItem button component={Link} to="/automation-rules">
        <ListItemText primary="Automation Rules" />
      </ListItem>
      <ListItem button component={Link} to="/device-management">
        <ListItemText primary="Device Management" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
