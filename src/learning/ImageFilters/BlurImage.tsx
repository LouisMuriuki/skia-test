import {
  Canvas,
  Blur,
  Image,
  ColorMatrix,
  useImage,
  Group,
  Paint,
} from "@shopify/react-native-skia";
import { height, width } from "../../../dataStore";
export const BlurImage = () => {
  const image = useImage(require("../../../assets/oslo.png"));
  if (!image) {
    return null;
  }
  return (
    <Canvas style={{ flex: 1, width, height }}>
      <Group
        layer={
          <Paint>
            <Blur blur={2} />
            <ColorMatrix
              matrix={[
                -0.578, 0.99, 0.588, 0, 0, 0.469, 0.535, -0.003, 0, 0, 0.015,
                1.69, -0.703, 0, 0, 0, 0, 0, 1, 0,
              ]}
            />
          </Paint>
        }
      >
        <Image
          x={0}
          y={0}
          width={256}
          height={256}
          image={image}
          fit="cover"
        ></Image>
      </Group>
    </Canvas>
  );
};
