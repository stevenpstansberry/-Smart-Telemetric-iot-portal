import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import LightingControl from "./pages/LightingControl";
import AquariumMonitoring from "./pages/AquariumMonitoring";
import MusicControl from "./pages/MusicControl";
import AutomationRules from "./pages/AutomationRules";
import DeviceManagement from "./pages/DeviceManagement";
import { Box, Toolbar } from "@mui/material";

const drawerWidth = 240;

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, marginLeft: `${drawerWidth}px` }}
      >
        {/* Toolbar to provide spacing for the Navbar */}
        <Toolbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lighting-control" element={<LightingControl />} />
          <Route path="/aquarium-monitoring" element={<AquariumMonitoring />} />
          <Route path="/music-control" element={<MusicControl />} />
          <Route path="/automation-rules" element={<AutomationRules />} />
          <Route path="/device-management" element={<DeviceManagement />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
