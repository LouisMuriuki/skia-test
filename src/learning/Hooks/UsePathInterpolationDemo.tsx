import React, { useEffect } from "react";
import { useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import {
  Skia,
  usePathInterpolation,
  Canvas,
  Path,
} from "@shopify/react-native-skia";
import { useWindowDimensions } from "react-native";
const angryPath = Skia.Path.MakeFromSVGString(
  "M 16 25 C 32 27 43 28 49 28 C 54 28 62 28 73 26 C 66 54 60 70 55 74 C 51 77 40 75 27 55 C 25 50 21 40 27 55 Z"
)!;
const normalPath = Skia.Path.MakeFromSVGString(
  "M 21 31 C 31 32 39 32 43 33 C 67 35 80 36 81 38 C 84 42 74 57 66 60 C 62 61 46 59 32 50 C 24 44 20 37 21 31 Z"
)!;
const goodPath = Skia.Path.MakeFromSVGString(
  "M 21 45 C 21 37 24 29 29 25 C 34 20 38 18 45 18 C 58 18 69 30 69 45 C 69 60 58 72 45 72 C 32 72 21 60 21 45 Z"
)!;
export const UsePathInterpolationDemo = () => {
  const { width, height } = useWindowDimensions();
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 1000 }),-1);
  }, []);
  const path = usePathInterpolation(
    progress,
    [0, 0.5, 1],
    [angryPath, normalPath, goodPath]
  );
  return (
    <Canvas style={{ flex: 1, width, height }}>
      <Path
        path={path}
        style="stroke"
        strokeWidth={5}
        strokeCap="round"
        strokeJoin="round"
      />
    </Canvas>
  );
};
