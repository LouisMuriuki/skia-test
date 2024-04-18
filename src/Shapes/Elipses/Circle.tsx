import {Canvas, Circle} from "@shopify/react-native-skia";
import { height, width } from "../../../dataStore";
 
export const CircleComponent = () => {
  const r = 128;
  return (
    <Canvas style={{ width,height }}>
      <Circle cx={r} cy={10} r={r} color="lightblue" />
    </Canvas>
  );
};