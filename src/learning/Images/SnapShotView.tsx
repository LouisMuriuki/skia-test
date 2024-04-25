import {
  View,
  Text,
  Pressable,
  useWindowDimensions,
  StyleSheet,
  PixelRatio,
} from "react-native";
import React, { useState, useRef } from "react";
import {
  SkImage,
  makeImageFromView,
  Canvas,
  Image,
} from "@shopify/react-native-skia";
import { height, width } from "../../../dataStore";

const SnapShotView = () => {
  const pd = PixelRatio.get();

  const ref = useRef();
  const [image, setImage] = useState<SkImage | null>(null);
  // Create a function to take the snapshot
  const onPress = async () => {
    // makeInageFromVoew accepts a ref to a view and returns a snapshot of the view asychroniously
    const snapshot = await makeImageFromView(ref);
    setImage(snapshot);
  };
  return (
    <View style={{ width: 350, height: 350 }}>
      <Pressable onPress={onPress}>
        <View
          ref={ref}
          collapsable={false} //important to prevent unwanted behaviuor
          style={{ backgroundColor: "cyan" }}
        >
          <Text>This is a react native view</Text>
        </View>
      </Pressable>
      {image && (
        <Canvas style={{ width, height }}>
          <Image
            image={image}
            x={0}
            y={0}
            width={image.width() / pd}
            height={image.height() / pd}
          />
        </Canvas>
      )}
    </View>
  );
};

export default SnapShotView;
