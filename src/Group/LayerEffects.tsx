// Using the layer property will create a bitmap drawing of the children. You can use it to apply effects.
// This is particularly useful to build effects that need to be applied to a group of elements and not one in particular.
import {
  Canvas,
  Group,
  Circle,
  Blur,
  Paint,
  ColorMatrix,
} from "@shopify/react-native-skia";
export const LayerEffects = () => {
  const width = 256;
  const height = 256;
  return (
    <Canvas style={{ width, height }}>
      <Group
        color="lightblue"
        layer={
          <Paint>
            <Blur blur={20} />
            <ColorMatrix
              matrix={[
                1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 18, -7,
              ]}
            />
          </Paint>
        }
      >
        <Circle cx={0} cy={128} r={128 * 0.95} />
        <Circle cx={256} cy={128} r={128 * 0.95} />
      </Group>
    </Canvas>
  );
};
