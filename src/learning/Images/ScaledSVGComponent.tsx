import { View, Text } from "react-native";
import React from "react";
import {
  Canvas,
  Skia,
  Group,
  ImageSVG,
  rect,
  fitbox,
  Paint,
  ColorMatrix,
  OpacityMatrix,
  Blur,
} from "@shopify/react-native-skia";
import { height, width } from "../../../dataStore";
//SCALE SVG TO FIT CANVAS
// to scale an svg in skia use the fitbox function

//ADD EFFECTS
//svg does not follow the same painting rules as other components  we can apply effects using the layer property
//i.e we can apply opacity useing color matrix

const svg = Skia.SVG.MakeFromString(
  `<svg viewBox='0 0 20 20' width="20" height="20" xmlns='http://www.w3.org/2000/svg'>
    <circle cx='10' cy='10' r='10' fill='#00ffff'/>
  </svg>`
)!;
//scale to fill the canvas
const src = rect(0, 0, svg.width(), svg.height());
const dst = rect(0, 0, width, height);

const ScaledSVGComponent = () => {
  return (
    <Canvas style={{ width, height, backgroundColor: "magenta" }}>
      <Group
        transform={fitbox("contain", src, dst)}
        layer={
          <Paint>
            {/* opacity applied, though it looks as color blending due to the magenta color in the background */}
            {/* <ColorMatrix matrix={OpacityMatrix(0.5)} /> */}
            {/* apply blur */}
            <Blur blur={10} /> /
          </Paint>
        }
      >
        <ImageSVG svg={svg} height={height} width={width} />
      </Group>
    </Canvas>
  );
};

// RGBA colors syntax is not supported, use fill-opacity and stroke-opacity instead i.e
{
  /* <circle
  r="10"
  cx="10"
  cy="10"
  fill="rgba(100, 200, 300, 0.5)"
  stroke="rgba(100, 200, 300, 0.8)"
/>; */
}
// should be:
{
  /* <circle
  r="10"
  cx="10"
  cy="10"
  fill="rgb(100, 200, 300)"
  fill-opacity="0.5"
  stroke="rgb(100, 200, 300)"
  stroke-opacity="0.8"
/>; */
}

export default ScaledSVGComponent;
