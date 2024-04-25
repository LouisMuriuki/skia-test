import { View, Text } from "react-native";
import React from "react";
import {
  Canvas,
  Group,
  Image,
  Skia,
  useAnimatedImageValue,
} from "@shopify/react-native-skia";
import { height, width } from "../../dataStore";

const ClipImageToPath = () => {
  const image = useAnimatedImageValue(require("../../assets/dakota.png"));
  const clipPath = Skia.Path.MakeFromSVGString(
    "M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z"
  );
  return (
    <Canvas style={{ width, height }}>
      <Group clip={clipPath}>
        {image && (
          <Image
            image={image}
            x={20}
            y={20}
            fit={"cover"}
            height={height}
            width={width}
          />
        )}
      </Group>
    </Canvas>
  );
};

export default ClipImageToPath;
