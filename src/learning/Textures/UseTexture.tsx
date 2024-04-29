import { useWindowDimensions } from "react-native";
import {use } from "@shopify/react-native-skia";
import { Image, Rect, rect, Canvas, Fill } from "@shopify/react-native-skia";
import React from "react";
const Demo = () => {
  const { width, height } = useWindowDimensions();
  const texture = useTexture(<Fill color="cyan" />, { width, height });
  return (
    <Canvas style={{ flex: 1 }}>
      <Image image={texture} rect={{ x: 0, y: 0, width, height }} />
    </Canvas>
  );
};
