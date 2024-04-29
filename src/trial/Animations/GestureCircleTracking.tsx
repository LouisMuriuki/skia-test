import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import { Canvas, Circle } from "@shopify/react-native-skia";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";


const GestureCircleTracking = () => {
  const { width, height } = useWindowDimensions();
  const radius = 30;
  const x = useSharedValue(200);
  const y = useSharedValue(200);

  const gesture = Gesture.Pan().onChange((e) => {
    x.value = x.value += e.changeX;
    y.value = y.value += e.changeY;
  });

  const overlayView = useAnimatedStyle(() => ({
    position: "absolute",
    top: -radius,
    left: -radius,
    width: radius * 2,
    height: radius * 2,
    backgroundColor: "cyan",
    transform: [{ translateX: x.value }, { translateY: y.value }],
  }));
  const overlayView1 = useAnimatedStyle(() => ({
    position: "absolute",
    top: radius*12,
    left: -radius,
    width: radius * 2,
    height: radius * 2,
    backgroundColor: "cyan",
    transform: [{ translateX: x.value }, { translateY: y.value }],
  }));

  return (
    <View style={{ flex: 1 }}>
      <Canvas style={{ flex: 1, width, height }}>
        <Circle cx={x} cy={y} r={radius} color={"blue"} />
      </Canvas>
      <Canvas style={{ flex: 1, width, height }}>
        <Circle cx={x} cy={y} r={radius} color={"blue"} />
      </Canvas>
      <GestureDetector gesture={gesture}>
        <Animated.View style={overlayView} />
      </GestureDetector>
      <GestureDetector gesture={gesture}>
        <Animated.View style={overlayView1} />
      </GestureDetector>
    </View>
  );
};

export default GestureCircleTracking;
