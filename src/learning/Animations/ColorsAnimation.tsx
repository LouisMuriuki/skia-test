import {
  Canvas,
  LinearGradient,
  Fill,
  // Use this function instead of interpolateColor from Reanimated
  interpolateColors,
  vec,
} from "@shopify/react-native-skia";
import { useEffect } from "react";
import { useWindowDimensions } from "react-native";
import {
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
const startColors = [
  "rgba(34, 193, 195, 0.4)",
  "rgba(34,193,195,0.4)",
  "rgba(63,94,251,1)",
  "rgba(253,29,29,0.4)",
];
const middleColors = [
  "rgba(15,20,255,0.9)",
  "rgba(150,220,50,0.7)",
  "rgba(200,100,150,0.6)",
  "rgba(50,150,200,0.8)",
  "rgba(255,100,0,1)",
];
const endColors = [
  "rgba(0,212,255,0.4)",
  "rgba(253,187,45,0.4)",
  "rgba(252,70,107,1)",
  "rgba(252,176,69,0.4)",
];
export const ColorsAnimation = () => {
  const { width, height } = useWindowDimensions();
  const colorsIndex = useSharedValue(0);
  useEffect(() => {
    colorsIndex.value = withRepeat(
      withTiming(startColors.length - 1, {
        duration: 4000,
      }),
      -1,
      true
    );
  }, []);
  const gradientColors = useDerivedValue(() => {
    return [
      interpolateColors(colorsIndex.value, [0, 1, 2, 3], startColors),
      interpolateColors(colorsIndex.value, [0, 1, 2, 3], middleColors),
      interpolateColors(colorsIndex.value, [0, 1, 2, 3],endColors),
 
    ];
  });
  return (
    <Canvas style={{ width,height }}>
      <Fill />
        <LinearGradient
          start={vec(0, 0)}
          end={vec(width, height)}
          colors={gradientColors}
        />
     
    </Canvas>
  );
};
