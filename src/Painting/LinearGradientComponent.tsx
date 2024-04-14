import {
  Canvas,
  Circle,
  Group,
  LinearGradient,
  vec,
} from "@shopify/react-native-skia";
const width = 256;
export const LinearGradientComponent = () => {
  const r = width / 2;
  return (
    <Canvas style={{ width: "100%", height: "100%" }}>
      <Circle cx={r} cy={r} r={r}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(2 * r, 2 * r)}
          colors={["#00ff87", "#60efff"]}
        />
      </Circle>
      <Group>
        <LinearGradient
          start={vec(2 * r, 2 * r)}
          end={vec(4 * r, 4 * r)}
          colors={["#0061ff", "#60efff"]}
        />
        <Circle cx={r * 2} cy={r * 3} r={r} />
      </Group>
    </Canvas>
  );
};
