import { useWindowDimensions } from "react-native";
import {
  Canvas,
  Circle,
  Fill,
  interpolateColors,
} from "@shopify/react-native-skia";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  useDerivedValue,
  useSharedValue,
  withDecay,
} from "react-native-reanimated";
export const GestureAnimation = () => {
  const { width, height } = useWindowDimensions();
  const leftBoundary = 0;
  const rightBoundary = width;
  const translateX = useSharedValue(width / 2);
  const translateY = useSharedValue(height / 2);
  const color = useDerivedValue(() => {
    return [];
  });
  const gesture = Gesture.Pan()
    .onChange((e) => {
      translateX.value += e.changeX;
      translateY.value += e.changeY;
    })
    .onEnd((e) => {
      translateX.value = withDecay({
        velocity: e.velocityX,
        clamp: [leftBoundary, rightBoundary],
      });
      translateY.value = withDecay({
        velocity: e.velocityX,
        clamp: [leftBoundary, height],
      });
    });
  return (
    <Canvas style={{ width, height }}>
      <Fill color="white" />
      <GestureDetector gesture={gesture}>
        <Animated.View>
          <Circle
            cx={translateX}
            cy={translateY}
            r={20}
            color={interpolateColors(
              translateY.value,
              [-width, width],
              ["red", "violet"]
            )}
          />
        </Animated.View>
      </GestureDetector>
    </Canvas>
  );
};
