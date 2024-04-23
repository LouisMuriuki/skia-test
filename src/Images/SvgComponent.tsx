// The ImageSVG component doesn't follow the same painting rules as other components.
import { View, Text } from "react-native";
import React from "react";
import { Canvas, ImageSVG, Skia, useSVG } from "@shopify/react-native-skia";
import { height, width } from "../../dataStore";

const SvgComponent = () => {
//   const svg1 = useSVG(require("some path"));
  const svg2 = Skia.SVG.MakeFromString(
    `<svg viewBox='0 0 290 500' xmlns='http://www.w3.org/2000/svg'>
    <circle cx='31' cy='325' r='120px' fill='#c02aaa'/>
  </svg>`
  );
  return (
    <Canvas style={{ width, height }}>
      <ImageSVG x={0} y={0} height={height} width={width} svg={svg2} />
    </Canvas>
  );
};

export default SvgComponent;
