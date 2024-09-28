// pages/Home.js
import React, { useContext } from "react";
import { DeviceContext } from "../contexts/DeviceContext";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Home = () => {
  const { devices } = useContext(DeviceContext);

  return (
    <Grid container spacing={2}>
      <Typography>meow</Typography>

      {devices.map((device) => (
        <Grid item xs={12} sm={6} md={4} key={device.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{device.name}</Typography>
              <Typography variant="body2">Status: {device.status}</Typography>
              {/* Additional device info */}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
