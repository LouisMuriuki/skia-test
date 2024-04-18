import React from "react";
import {
  Canvas,
  Image,
  useAnimatedImageValue,
} from "@shopify/react-native-skia";
import { Pressable } from "react-native";
import { useSharedValue } from "react-native-reanimated";
// animated images currently supported Gifs and animated WebP
//reanimated must be available
export const AnimatedImages = () => {
  // This can be an animated GIF or WebP file
  const isPaused = useSharedValue(false);
  
  const bird = useAnimatedImageValue(
    require("../../assets/flying-fly.gif"),
    isPaused
  );
  return (
    <Pressable onPress={() => (isPaused.value = !isPaused.value)}>
      <Canvas
        style={{
          width: 320,
          height: 180,
        }}
      >
        <Image
          image={bird}
          x={0}
          y={0}
          width={320}
          height={180}
          fit="contain"
        />
      </Canvas>
    </Pressable>
  );
};
