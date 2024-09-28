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
import { ThemeContextProvider } from "./util/ThemeContex";

const drawerWidth = 240;
const collapsedWidth = 60;

function App() {
  const [isSidebarOpen, setSidebarOpen] = React.useState(true); // Manages sidebar state

  return (
    <ThemeContextProvider>
      <Router>
        {/* Navbar */}
        <Navbar />

        {/* Sidebar */}
        <Sidebar open={isSidebarOpen} />

        {/* Main content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            marginLeft: isSidebarOpen ? drawerWidth : collapsedWidth,
            transition: "margin-left 0.3s", // Smooth transition for content when sidebar collapses
          }}
        >
          <Toolbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lighting-control" element={<LightingControl />} />
            <Route
              path="/aquarium-monitoring"
              element={<AquariumMonitoring />}
            />
            <Route path="/music-control" element={<MusicControl />} />
            <Route path="/automation-rules" element={<AutomationRules />} />
            <Route path="/device-management" element={<DeviceManagement />} />
          </Routes>
        </Box>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
