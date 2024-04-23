import {
    Canvas,
    ColorMatrix,
    Image,
    useImage,
    Lerp,
  } from "@shopify/react-native-skia";
import { height, width } from "../../dataStore";
   
  export const LerpColorFilter = () => {
    const image = useImage(require("../../assets/oslo.png"));
   
    const blackAndWhite = [
      0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0,
    ];
    const purple = [
      1, -0.2, 0, 0, 0, 0, 1, 0, -0.1, 0, 0, 1.2, 1, 0.1, 0, 0, 0, 1.7, 1, 0,
    ];
    return (
      <Canvas style={{ flex: 1,width,height }}>
        <Image x={0} y={0} width={256} height={256} image={image} fit="cover">
          <Lerp t={0.5}>
            <ColorMatrix matrix={purple} />
            <ColorMatrix matrix={blackAndWhite} />
          </Lerp>
        </Image>
      </Canvas>
    );
  };