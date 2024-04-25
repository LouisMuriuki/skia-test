import { Canvas, RoundedRect } from "@shopify/react-native-skia";
import { height, width } from "../../../../dataStore";
export const RoundedRectangleComponent = () => {
  return (
    <Canvas style={{ width, height }}>
      <RoundedRect
        x={0}
        y={0}
        width={256}
        height={256}
        r={25}
        color="lightblue"
      />
    </Canvas>
  );
};
