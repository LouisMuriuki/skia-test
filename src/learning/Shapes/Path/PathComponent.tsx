import {Canvas, Path} from "@shopify/react-native-skia";
 
export const PathComponent = () => {
    const width = 256;
    const height = 256;
  return (
    <Canvas style={{ width,height }}>
      <Path
        path="M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z"
        color="lightblue"
        style="stroke"
        strokeJoin="miter"
        strokeWidth={5}
        // We trim the first and last quarter of the path
        start={0.05}
        end={0.95}
      />
    </Canvas>
  );
};