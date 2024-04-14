import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/Main";
import Snapshot from "./src/Snapshot";
import { AppComponent } from "./src/ManualInjectionContext";
import FillsStrokes from "./src/Painting/FillsStrokes";
import { LinearGradientComponent } from "./src/Painting/LinearGradientComponent";
import { Inheritance } from "./src/Painting/Inheritance";
import { SunComponent } from "./src/Painting/SunComponent";
import { SimpleTransformation } from "./src/Group/SimpleTransformation";
import { Clipping } from "./src/Group/Clipping";
import { ClipRoundedRectangle } from "./src/Group/ClipRoundedRectanglr";
import { StarClip } from "./src/Group/ClipPath";
import { LayerEffects } from "./src/Group/LayerEffects";
import { FitBoxComponent } from "./src/Group/FitBoxComponent";


export default function App() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <AppComponent /> */}
      {/* <FillsStrokes /> */}
      {/* <LinearGradientComponent/> */}
      {/* <Inheritance/> */}
      {/* <SunComponent/> */}
      <SimpleTransformation />
      {/* <Clipping/> */}
      {/* <ClipRoundedRectangle/> */}
      {/* <StarClip/> */}
      {/* <LayerEffects/> */}
      {/* <FitBoxComponent/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
