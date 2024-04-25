import { Canvas, DiffRect, rect, rrect } from "@shopify/react-native-skia";
import { height, width } from "../../../../dataStore";
export const DiffRectangleComponent = () => {
  const outer = rrect(rect(0, 0, 256, 256), 25, 25);
  const inner = rrect(rect(50, 50, 256 - 100, 256 - 100), 50, 50);
  return (
    <Canvas style={{ width, height }}>
      <DiffRect
        inner={inner}
        outer={outer}
        style="stroke"
        strokeWidth={10}
        strokeJoin="bevel"
        blendMode="darken"
        color="lightblue"
      />
    </Canvas>
  );
};
