import { Canvas, Circle, Group, Paint, vec } from "@shopify/react-native-skia";
const width = 256;
const height = 256;
const strokeWidth = 30;
const r = width / 2 - strokeWidth / 2;
const c = vec(width / 2, height / 2);
export const SunComponent = () => {
  return (
    <Canvas
      style={{
        width,
        height,
      }}
    >
      <Group opacity={0.5}>
        <Circle c={c} r={r} color="#FC9601" />
        <Circle
          c={c}
          r={r}
          color="#FFE484"
          style="stroke"
          strokeWidth={strokeWidth }
        />
        <Circle
          c={c}
          r={r}
          color="#FFCC33"
          style="stroke"
          strokeWidth={strokeWidth / 2}
        />
      </Group>
    </Canvas>
  );
};
