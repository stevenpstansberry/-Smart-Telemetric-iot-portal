// contexts/DeviceContext.js
import React, { createContext, useState } from "react";

export const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
  const [devices, setDevices] = useState([]);
  const [automationRules, setAutomationRules] = useState([]);

  return (
    <DeviceContext.Provider
      value={{ devices, setDevices, automationRules, setAutomationRules }}
    >
      {children}
    </DeviceContext.Provider>
  );
};
