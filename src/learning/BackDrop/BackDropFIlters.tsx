// allow you to apply some backdrop on a clip area of an image.

import {
  Canvas,
  BackdropFilter,
  Fill,
  Image,
  ColorMatrix,
  useImage,
} from "@shopify/react-native-skia";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
// https://kazzkiq.github.io/svg-color-filter/
const BLACK_AND_WHITE = [
  0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0,
];
export const BackDropFiltersComponent = () => {
  const [changeY, setChangeY] = useState(0);
  const image = useImage(require("../../../assets/oslo.png"));

  useEffect(() => {
    setInterval(() => {
      setChangeY((prev) => (prev < 200 ? prev + 1 : prev));
    }, 500);
  }, []);

  return (
    <View>
      <Canvas style={{ width: 256, height: 256 }}>
        <Image image={image} x={0} y={0} width={256} height={256} fit="cover" />
        <BackdropFilter
          clip={{ x: 0, y: changeY, width: 256, height: 128 }}
          filter={<ColorMatrix matrix={BLACK_AND_WHITE} />}
        />
      </Canvas>
      <Text>{changeY}</Text>
    </View>
  );
};
