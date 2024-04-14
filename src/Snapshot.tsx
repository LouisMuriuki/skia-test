import React, { useEffect} from "react";
import {
  Canvas,
  Circle,
  useCanvasRef,
} from "@shopify/react-native-skia";

const Snapshot = () => {
  const ref = useCanvasRef();
  // couldn't get makeImageSnapshotAsync to work
  const generateIamge = async () => {
    setTimeout(() => {
      const image = ref.current?.makeImageSnapshot();
      if (image) {
        // you can use image in an <Image> component
        // Or save to file using encodeToBytes -> Uint8Array
        const bytes = image.encodeToBytes();
        console.log("bytes is", bytes);
      }
    }, 1000);
  };
  useEffect(() => {
    generateIamge();
  }, []);
  return (
    <Canvas style={{ flex: 1 }} ref={ref}>
      <Circle r={100} cy={128} cx={128} color={"red"} />
    </Canvas>
  );
};

export default Snapshot;
