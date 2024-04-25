import {
  Canvas,
  Group,
  Image,
  useImage,
  Skia,
  rrect,
  rect,
  Fill,
} from "@shopify/react-native-skia";
const size = 256;
const width = 256;
const height = 256;
const padding = 32;
// clip provides a clipping region that sets what part of the children should be shown.
export const Clipping = () => {
  const image = useImage(require("../../../assets/oslo.png"));
  const rct = rect(padding, padding, size - padding * 2, size - padding * 2);
  return (
    <Canvas style={{ width, height }}>
      <Fill color="lightblue" />
      <Group clip={rct}>
        <Image
          image={image}
          x={0}
          y={0}
          width={size}
          height={size}
          fit="contain"
        />
      </Group>
    </Canvas>
  );
};
