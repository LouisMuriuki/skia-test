import { Canvas, Circle, Paint, Group } from "@shopify/react-native-skia";
const width = 256;
const height = 256;
export const Inheritance = () => {
  const r = width / 6;

//   Descendants inherit the paint attributes.
  return (
    <Canvas style={{ width, height }}>
      <Group color="lightblue">
        <Circle cx={r} cy={r} r={r} />
        <Group style="stroke" strokeWidth={10}>
          <Circle cx={3 * r} cy={3 * r} r={r} />
        </Group>
      </Group>
    </Canvas>
  );
};
