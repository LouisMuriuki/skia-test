import { View, Text } from "react-native";
import React from "react";
import { Canvas, Circle, Paint, vec } from "@shopify/react-native-skia";

const width = 256;
const height = 256;

const FillsStrokes = () => {
  const strokeWidth = 10;
  const c = vec(width / 2, height / 2);
  const r = (width - strokeWidth) / 2;

//   this attribute can be applied to PAint, rect as well as Circle
  return (
    <Canvas style={{ width, height }}>
      <Circle c={c} r={r} color="red">
        <Paint color="lightblue" />
        {/* a paint has a style property to indicate whether it is a fill or a stroke paint. */}
        <Paint color="#adbce6" style="stroke" strokeWidth={strokeWidth} />
        <Paint color="#ade6d8" style="stroke" strokeWidth={strokeWidth / 2} />
       
      </Circle>
    </Canvas>
  );
};

export default FillsStrokes;
