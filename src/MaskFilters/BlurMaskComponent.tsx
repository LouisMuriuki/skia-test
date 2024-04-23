import {Canvas, Fill, Circle, BlurMask, vec} from "@shopify/react-native-skia";
import { height, width } from "../../dataStore";
 
export const BlurMaskComponent = () => {
  return (
    <Canvas style={{ flex: 1, width, height}}>
      <Circle c={vec(128)} r={128} color="lightblue">
        <BlurMask blur={20} style="solid" />
      </Circle>
    </Canvas>
  );
};