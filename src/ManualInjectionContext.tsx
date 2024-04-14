import React from "react";
import { Canvas, Fill } from "@shopify/react-native-skia";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
const MyDrawing = () => {
  const { primary } = useTheme();
  return <Fill color={primary} />;
};
export const Layer = () => {
  const theme = useTheme();
  return (
    <Canvas style={{ flex: 1 }}>
      {/* We need to re-inject the context provider here.  */}
      <ThemeProvider primary={theme.primary} >
        <MyDrawing />
      </ThemeProvider>
    </Canvas>
  );
};
export const AppComponent = () => {
  return (
    <ThemeProvider primary="red">
      <Layer />
    </ThemeProvider>
  );
};
