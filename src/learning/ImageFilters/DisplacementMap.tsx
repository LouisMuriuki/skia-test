import {
  Canvas,
  Image,
  Turbulence,
  DisplacementMap,
  useImage,
} from "@shopify/react-native-skia";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
export const DisplacementMapComponent = () => {
  const image = useImage(require("../../../assets/oslo.png"));
  const [char, setChar] = useState<string>("r");

  const RGBA = ["r", "g", "b", "a"];

  useEffect(() => {
    setInterval(() => {
      const randomint = Math.floor(Math.random() * RGBA.length);
      setChar(RGBA[randomint]);
    }, 200);
  }, []);

  if (!image) {
    return null;
  }
  return (
    <View>
      <Canvas style={{ width: 256, height: 256 }}>
        <Image image={image} x={0} y={0} width={256} height={256} fit="cover">
          <DisplacementMap channelX={char} channelY={char} scale={20}>
            <Turbulence freqX={0.01} freqY={0.05} octaves={2} seed={2} />
          </DisplacementMap>
        </Image>
      </Canvas>
      <Text>{char}</Text>
    </View>
  );
};
