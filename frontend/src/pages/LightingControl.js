// pages/LightingControl.js
import React, { useState } from "react";
import { ChromePicker } from "react-color";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";

const LightingControl = () => {
  const [color, setColor] = useState("#ffffff");
  const [brightness, setBrightness] = useState(100);
  const [isOn, setIsOn] = useState(true);

  const handleColorChange = (newColor) => setColor(newColor.hex);
  const handleBrightnessChange = (event, newValue) => setBrightness(newValue);
  const handlePowerToggle = () => setIsOn(!isOn);

  return (
    <div>
      <Typography variant="h4">Lighting Control</Typography>
      <Switch checked={isOn} onChange={handlePowerToggle} />
      <Typography>{isOn ? "On" : "Off"}</Typography>
      <ChromePicker color={color} onChangeComplete={handleColorChange} />
      <Typography>Brightness</Typography>
      <Slider
        value={brightness}
        onChange={handleBrightnessChange}
        aria-labelledby="brightness-slider"
      />
    </div>
  );
};

export default LightingControl;
