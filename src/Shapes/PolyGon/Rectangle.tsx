import { Canvas, Rect } from "@shopify/react-native-skia";
 
export const DrawRectangle = () => {
    const width = 256;
    const height = 256;
  return (
    <Canvas style={{ width,height }}>
      <Rect x={0} y={0} width={256} height={256} style="stroke"  strokeWidth={5} strokeJoin="bevel" color="lightblue" />
    </Canvas>
  );
};