import { useEffect } from "react";
import { Canvas, Circle, Group, Text, interpolateColors } from "@shopify/react-native-skia";
import {
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { height, width } from "../../../dataStore";
export const CircleAnimation = () => {
  const size = 300;
  const r = useSharedValue(0);
  const c = useDerivedValue(() => size - r.value);

  useEffect(() => {
    r.value = withRepeat(withTiming(size * 0.33, { duration: 1000 }), -1);
  }, [r, size]);

  return (
    <Canvas style={{ width, height }}>
      <Group blendMode="multiply">
        <Text x={0} y={20} text={r.value.toString()}  />
        <Circle
          cx={r}
          cy={r}
          r={r}
          color={interpolateColors(r.value, [0, 200], ["cyan", "red"])}
        />
        <Circle cx={c} cy={r} r={r} color="magenta" />
        <Circle cx={size / 2} cy={c} r={r} color="yellow" />
      </Group>
    </Canvas>
  );
};
