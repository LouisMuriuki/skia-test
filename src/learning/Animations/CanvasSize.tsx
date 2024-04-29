import { View, Text, useWindowDimensions } from "react-native";
import React, { useEffect } from "react";
import { Canvas, Fill } from "@shopify/react-native-skia";
import { Easing, useSharedValue, withTiming } from "react-native-reanimated";

const CanvasSize = () => {
  const { width, height } = useWindowDimensions();
  const x = useSharedValue(100);
  const y = useSharedValue(100);

  useEffect(() => {
    x.value = withTiming(200, { duration: 1000, easing: Easing.bounce });
    y.value = withTiming(200, { duration: 1000, easing: Easing.bounce });
  }, []);
  const onSize = useSharedValue({ width: x.value, height: y.value });
  return (
    <Canvas style={{ flex: 1, width: 30, height: 30 }} onSize={onSize}>
      <Fill color={"cyan"} />
    </Canvas>
  );
};

export default CanvasSize;
