import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Canvas, Circle, Group } from "@shopify/react-native-skia";
const width = 256;
const height = 256;
const r = width * 0.33;
const Main = () => {
  return (
    <Canvas style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Group blendMode="hardLight" > */}
        <Circle cx={r} cy={r} r={r} color="cyan" />
        <Circle cx={width - r} cy={r} r={r} color="magenta" />
        <Circle cx={width / 2} cy={width - r} r={r} color="yellow" />
      {/* </Group> */}
    </Canvas>
  );
};

export default Main;

const styles = StyleSheet.create({});
