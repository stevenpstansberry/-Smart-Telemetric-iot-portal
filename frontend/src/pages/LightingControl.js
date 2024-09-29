import React, { useState } from "react";
import { SketchPicker } from "react-color";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid, IconButton, Paper } from "@mui/material";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const LightingControl = () => {
  const [color, setColor] = useState({
    r: 255,
    g: 255,
    b: 255,
  });
  const [brightness, setBrightness] = useState(100);
  const [isOn, setIsOn] = useState(true);

  // Only handle RGB values
  const handleColorChange = (newColor) => {
    const { r, g, b } = newColor.rgb;
    setColor({ r, g, b });
  };

  const handleBrightnessChange = (event, newValue) => setBrightness(newValue);
  const handlePowerToggle = () => setIsOn(!isOn);

  const colorPresets = ["#FF6347", "#1E90FF", "#32CD32", "#FFFFE0", "#FF69B4"];

  return (
    <Box
      sx={{
        padding: 3,
        maxWidth: 600,
        margin: "0 auto",
        backgroundColor: "#f4f6f8",
        borderRadius: 4,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        LED Strip Control
      </Typography>

      {/* Power Control */}
      <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
        <IconButton
          color={isOn ? "primary" : "default"}
          onClick={handlePowerToggle}
        >
          <PowerSettingsNewIcon fontSize="large" />
        </IconButton>
        <Typography variant="h6">{isOn ? "Turn Off" : "Turn On"}</Typography>
      </Box>

      {/* Color Control */}
      <Paper elevation={2} sx={{ padding: 2, marginBottom: 4 }}>
        <Typography variant="h6" gutterBottom>
          Choose Color
        </Typography>
        {/* Replace ChromePicker with SketchPicker and disable alpha */}
        <SketchPicker
          color={color}
          onChangeComplete={handleColorChange}
          disableAlpha={true} // Disable alpha slider
        />
        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
          {colorPresets.map((preset, index) => (
            <Button
              key={index}
              onClick={() =>
                setColor({
                  r: parseInt(preset.slice(1, 3), 16),
                  g: parseInt(preset.slice(3, 5), 16),
                  b: parseInt(preset.slice(5, 7), 16),
                })
              }
              sx={{
                backgroundColor: preset,
                width: 36,
                height: 36,
                minWidth: 0,
                marginRight: 1,
              }}
            ></Button>
          ))}
        </Box>
      </Paper>

      {/* Brightness Control */}
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Brightness
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <BrightnessHighIcon />
          </Grid>
          <Grid item xs>
            <Slider
              value={brightness}
              onChange={handleBrightnessChange}
              aria-labelledby="brightness-slider"
              sx={{ color: "#1E90FF" }}
            />
          </Grid>
          <Grid item>
            <Typography>{brightness}%</Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Color Preview */}
      <Box
        sx={{
          backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
          height: 50,
          borderRadius: 2,
          border: "1px solid #ccc",
        }}
      />
    </Box>
  );
};

export default LightingControl;
