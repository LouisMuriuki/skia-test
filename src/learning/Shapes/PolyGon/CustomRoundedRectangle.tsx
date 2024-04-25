import { Canvas, RoundedRect } from "@shopify/react-native-skia";
export const CustomeRoundedRectangle = () => {
  const size = 256;
  const r = size * 0.2;
  const rrct = {
    rect: { x: 0, y: 0, width: size, height: size },
    topLeft: { x: 0, y: 0 },
    topRight: { x: r, y: r },
    bottomRight: { x: 0, y: 0 },
    bottomLeft: { x: r, y: r },
    rx: r, 
    ry: 15, 
};
  return (
    <Canvas style={{ width: size, height: size }}>
      <RoundedRect rect={rrct} color="lightblue" />
    </Canvas>
  );
};
