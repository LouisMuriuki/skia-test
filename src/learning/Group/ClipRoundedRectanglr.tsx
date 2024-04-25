import {
  Canvas,
  Group,
  Image,
  useImage,
  Skia,
  rrect,
  rect,
} from "@shopify/react-native-skia";
const size = 256;
const padding = 32;
const r = 8;
export const ClipRoundedRectangle = () => {
  const image = useImage(require("../../../assets/oslo.png"));
  const roundedRect = rrect(
    rect(padding, padding, size - padding * 2, size - padding * 2),
    r,
    r
  );
  return (
    <Canvas style={{ flex: 1 }}>
      <Group clip={roundedRect}>
        <Image
          image={image}
          x={0}
          y={0}
          width={size}
          height={size}
          fit="cover"
        />
      </Group>
    </Canvas>
  );
};
