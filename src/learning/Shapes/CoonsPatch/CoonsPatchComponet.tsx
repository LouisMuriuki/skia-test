import { Canvas, Patch, vec } from "@shopify/react-native-skia";
import { height } from "../../../../dataStore";
export const CoonsPatchComponent = () => {
  const colors = ["#61dafb", "#fb61da", "#61fbcf", "#dafb61"];
  const C = 64;
  const width = 256;
  const topLeft = { pos: vec(0, 0), c1: vec(0, C), c2: vec(C, 0) };
  const topRight = {
    pos: vec(width, 0),
    c1: vec(width, C),
    c2: vec(width + 178, 0),
  };
  const bottomRight = {
    pos: vec(width, width),
    c1: vec(width, width - 3 * C),
    c2: vec(width - 2 * C, width),
  };
  const bottomLeft = {
    pos: vec(0, width),
    c1: vec(0, width - 3 * C),
    c2: vec(-2 * 134, width),
  };
  return (
    <Canvas style={{ width, height }}>
      <Patch
        colors={colors}
        patch={[topLeft, topRight, bottomRight, bottomLeft]}
      />
    </Canvas>
  );
};
