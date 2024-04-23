import {
  Skia,
  AlphaType,
  ColorType,
  Canvas,
  Image,
  useImage,
} from "@shopify/react-native-skia";
import { height, width } from "../../dataStore";
const pixels = new Uint8Array(256 * 256 * 4);
pixels.fill(255);
let i = 0;
for (let x = 0; x < 256; x++) {
  for (let y = 0; y < 256; y++) {
    pixels[i++] = (x * y) % 255;
  }
}
const data = Skia.Data.fromBytes(pixels);
const SkiaImage = Skia.Image.MakeImage(
  {
    width: 256,
    height: 256,
    alphaType: AlphaType.Opaque,
    colorType: ColorType.RGBA_8888,
  },
  data,
  256 * 4
);

export const MakeImageComponent = () => {
  // async so returns null till image is loaded
  // Loads an image from the JS bundle
  // const image1 = useImage(require("somepath"));
  // Loads an image from the network
  const image2 = useImage("https://picsum.photos/200/300");
  return (
    <Canvas style={{ width, height }}>
      <Image
        image={SkiaImage}
        x={20}
        y={40}
        width={width}
        height={height}
        fit={"cover"}
      />
    </Canvas>
  );
};
