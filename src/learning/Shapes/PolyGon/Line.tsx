import { Canvas, Line, vec } from "@shopify/react-native-skia";
import { height, width } from "../../../../dataStore";
export const LineComponent = () => {
  return (
    <Canvas style={{ width, height }}>
      <Line
        p1={vec(0, 0)}
        p2={vec(256, 256)}
        color="lightblue"
        style="fill"
        strokeWidth={4}
      />
    </Canvas>
  );
};
