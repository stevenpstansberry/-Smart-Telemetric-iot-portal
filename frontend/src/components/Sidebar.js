import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";
import { Box, Toolbar, Divider, Tooltip } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import BuildIcon from "@mui/icons-material/Build";
import HomeIcon from "@mui/icons-material/Home";

const collapsedWidth = 60;

const Sidebar = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {/*   Sidebar Drawer */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: collapsedWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: collapsedWidth,
            overflowX: "hidden",
          },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          {/* Home */}
          <Tooltip title="Home" placement="right">
            <ListItem button component={Link} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
            </ListItem>
          </Tooltip>

          {/* Lighting Control */}
          <Tooltip title="Lighting Control" placement="right">
            <ListItem button component={Link} to="/lighting-control">
              <ListItemIcon>
                <LightbulbIcon />
              </ListItemIcon>
            </ListItem>
          </Tooltip>

          {/* Music Control */}
          <Tooltip title="Music Control" placement="right">
            <ListItem button component={Link} to="/music-control">
              <ListItemIcon>
                <MusicNoteIcon />
              </ListItemIcon>
            </ListItem>
          </Tooltip>

          {/* Device Management */}
          <Tooltip title="Device Management" placement="right">
            <ListItem button component={Link} to="/device-management">
              <ListItemIcon>
                <BuildIcon />
              </ListItemIcon>
            </ListItem>
          </Tooltip>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
