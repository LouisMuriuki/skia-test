import { Canvas, useClock, vec, Circle } from "@shopify/react-native-skia";
import { useWindowDimensions } from "react-native";
import { useDerivedValue } from "react-native-reanimated";
export default function UseClock() {
  const { width, height } = useWindowDimensions();
  const t = useClock();
  const transform = useDerivedValue(() => {
    const scale = (2 / (3 - Math.cos(2 * t.value))) * 200;
    return [
      { translateX: scale * Math.cos(t.value) },
      { translateY: scale * (Math.sin(2 * t.value) / 2) },
    ];
  });
  return (
    <Canvas style={{ flex: 1, width, height }}>
      <Circle c={vec(0, 0)} r={50} color="cyan" transform={transform} />
    </Canvas>
  );
}
