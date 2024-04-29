import { useSharedValue, withSpring } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import {
  usePathValue,
  Canvas,
  Path,
  processTransform3d,
  Skia,
} from "@shopify/react-native-skia";
const rrct = Skia.Path.Make();
rrct.addRRect(Skia.RRectXY(Skia.XYWHRect(0, 0, 100, 100), 10, 10));
export const FrostedCard = () => {
  const rotateY = useSharedValue(0);
  const gesture = Gesture.Pan().onChange((event) => {
    rotateY.value -= event.changeX / 300;
  });
  const clip = usePathValue((path) => {
    "worklet";
    path.transform(
      processTransform3d([
        { translate: [50, 50] },
        { perspective: 300 },
        { rotateY: rotateY.value },
        { translate: [-50, -50] },
      ])
    );
  }, rrct);
  return (
    <GestureDetector gesture={gesture}>
      <Canvas style={{ flex: 1 }}>
        <Path path={clip} />
      </Canvas>
    </GestureDetector>
  );
};
