import { View, Text } from "react-native";
import React from "react";
import { Canvas, Circle, Paint } from "@shopify/react-native-skia";
import { height, width } from "../../dataStore";

const EyeBalls = () => {
  return (
    <Canvas style={{ width, height }}>
      <Circle cx={60} cy={40} r={18}>
        <Paint color={"brown"} />
        <Paint style="stroke" strokeWidth={10} color={"lightblue"} />
        <Paint color="lightblue" style="stroke" strokeWidth={4} />
        <Paint color="lightblue" style="stroke" strokeWidth={4} />
      </Circle>
      <Circle cx={200} color={"brown"} cy={40} r={18}>
        <Paint style="stroke" strokeWidth={10} color={"lightblue"} />
      </Circle>
    </Canvas>
  );
};

export default EyeBalls;
