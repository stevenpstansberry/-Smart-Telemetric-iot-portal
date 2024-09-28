// App.js
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

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <div style={{ marginLeft: 240, padding: 16 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lighting-control" element={<LightingControl />} />
          <Route path="/aquarium-monitoring" element={<AquariumMonitoring />} />
          <Route path="/music-control" element={<MusicControl />} />
          <Route path="/automation-rules" element={<AutomationRules />} />
          <Route path="/device-management" element={<DeviceManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
