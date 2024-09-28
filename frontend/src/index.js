import React from "react";
import ReactDOM from "react-dom/client"; // Note the change here
import App from "./App";
import { DeviceProvider } from "./contexts/DeviceContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <DeviceProvider>
    <App />
  </DeviceProvider>
);
