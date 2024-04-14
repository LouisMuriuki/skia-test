import {
  Canvas,
  Group,
  Image,
  useImage,
  Skia,
} from "@shopify/react-native-skia";
export const StarClip = () => {
  const width = 256;
  const height = 256;
  const image = useImage(require("../../assets/oslo.png"));
  const star = Skia.Path.MakeFromSVGString(
    "M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z"
  )!;
  return (
    <Canvas style={{ width, height }}>
      <Group clip={star} invertClip>
        <Image image={image} x={0} y={0} width={width} height={height} fit="cover" />
      </Group>
    </Canvas>
  );
};
