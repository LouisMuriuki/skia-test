import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import {
  Fill,
  Canvas,
  Rect,
  RoundedRect,
  Shadow,
} from "@shopify/react-native-skia";
import { height, width } from "../../dataStore";

const NeumophicButtons = () => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "lightblue",
      }}
    >
      <TouchableOpacity>
        <Canvas style={{ width: "100%", height: "100%" }}>
          <RoundedRect
            r={30}
            height={60}
            width={120}
            x={100}
            y={200}
            color={"green"}
          >
            <Shadow dx={10} dy={10} blur={25} color={"#93b8c4"} />
            <Shadow dx={-10} dy={-10} blur={25} color={"#93b8c4"} />
          </RoundedRect>
        </Canvas>
      </TouchableOpacity>
    </View>
  );
};

export default NeumophicButtons;
