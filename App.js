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
import { PathComponent } from "./src/Shapes/Path/PathComponent";
import { PathFillType } from "./src/Shapes/Path/PathFillType";
import { DrawRectangle } from "./src/Shapes/PolyGon/Rectangle";
import { RoundedRectangleComponent } from "./src/Shapes/PolyGon/RoundedRectanleComponent";
import { DiffRectangleComponent } from "./src/Shapes/PolyGon/DiffRectangle";
import { LineComponent } from "./src/Shapes/PolyGon/Line";
import { PointsComponent } from "./src/Shapes/PolyGon/PointComponent";
import { CircleComponent } from "./src/Shapes/Elipses/Circle";
import { CustomeRoundedRectangle } from "./src/Shapes/PolyGon/CustomRoundedRectangle";
import OvalComponent from "./src/Shapes/Elipses/OvalComponent";
import { CoonsPatchComponent } from "./src/Shapes/CoonsPatch/CoonsPatchComponet";
import { MakeImageComponent } from "./src/Images/MakeImageComponent";
import { AnimatedImages } from "./src/Images/AnimatedImages";
import SvgComponent from "./src/Images/SvgComponent";
import ScaledSVGComponent from "./src/Images/ScaledSVGComponent";
import SnapShotView from "./src/Images/SnapShotView";

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <AppComponent /> */}
      {/* <FillsStrokes /> */}
      {/* <LinearGradientComponent/> */}
      {/* <Inheritance/> */}
      {/* <SunComponent/> */}
      {/* <SimpleTransformation /> */}
      {/* <Clipping/> */}
      {/* <ClipRoundedRectangle/> */}
      {/* <StarClip/> */}
      {/* <LayerEffects/> */}
      {/* <FitBoxComponent/> */}
      {/* <PathComponent/> */}
      {/* <PathFillType/> */}
      {/* <DrawRectangle/> */}
      {/* <RoundedRectangleComponent/> */}
      {/* <CustomeRoundedRectangle /> */}
      {/* <DiffRectangleComponent/> */}
      {/* <LineComponent/> */}
      {/* <PointsComponent/> */}
      {/* <OvalComponent/> */}
      {/* <CoonsPatchComponent/> */}
      {/* <CircleComponent/> */}
      {/* <MakeImageComponent/> */}
      {/* <AnimatedImages/> */}
      {/* <SvgComponent/> */}
      {/* <ScaledSVGComponent/> */}
      <SnapShotView/>
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
