import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/Main";
import Snapshot from "./src/Snapshot";
import { AppComponent } from "./src/ManualInjectionContext";
import FillsStrokes from "./src/learning/Painting/FillsStrokes";
import { LinearGradientComponent } from "./src/learning/Painting/LinearGradientComponent";
import { Inheritance } from "./src/learning/Painting/Inheritance";
import { SunComponent } from "./src/learning/Painting/SunComponent";
import { SimpleTransformation } from "./src/learning/Group/SimpleTransformation";
import { Clipping } from "./src/learning/Group/Clipping";
import { ClipRoundedRectangle } from "./src/learning/Group/ClipRoundedRectanglr";
import { StarClip } from "./src/learning/Group/ClipPath";
import { LayerEffects } from "./src/learning/Group/LayerEffects";
import { FitBoxComponent } from "./src/learning/Group/FitBoxComponent";
import { PathComponent } from "./src/learning/Shapes/Path/PathComponent";
import { PathFillType } from "./src/learning/Shapes/Path/PathFillType";
import { DrawRectangle } from "./src/learning/Shapes/PolyGon/Rectangle";
import { RoundedRectangleComponent } from "./src/learning/Shapes/PolyGon/RoundedRectanleComponent";
import { DiffRectangleComponent } from "./src/learning/Shapes/PolyGon/DiffRectangle";
import { LineComponent } from "./src/learning/Shapes/PolyGon/Line";
import { PointsComponent } from "./src/learning/Shapes/PolyGon/PointComponent";
import { CircleComponent } from "./src/learning/Shapes/Elipses/Circle";
import { CustomeRoundedRectangle } from "./src/learning/Shapes/PolyGon/CustomRoundedRectangle";
import OvalComponent from "./src/learning/Shapes/Elipses/OvalComponent";
import { CoonsPatchComponent } from "./src/learning/Shapes/CoonsPatch/CoonsPatchComponet";
import { MakeImageComponent } from "./src/learning/Images/MakeImageComponent";
import { AnimatedImages } from "./src/learning/Images/AnimatedImages";
import { BlurImage } from "./src/learning/ImageFilters/BlurImage";
import { BlurImageFilter } from "./src/learning/ImageFilters/BlurImageFilter";
import { BoxShadow_Neumophism } from "./src/learning/ImageFilters/BoxShadow_Neumophism";
import { DisplacementMapComponent } from "./src/learning/ImageFilters/DisplacementMap";
import { BackDropFiltersComponent } from "./src/learning/BackDrop/BackDropFIlters";
import { BlurMaskComponent } from "./src/learning/MaskFilters/BlurMaskComponent";
import { LerpColorFilter } from "./src/learning/ColorFilter/LerpColorComponent";
import { AlphaMaskComponent } from "./src/learning/MaskFilters/AlphaMaskComponet";
import SvgComponent from "./src/learning/Images/SvgComponent";
import ScaledSVGComponent from "./src/learning/Images/ScaledSVGComponent";
import SnapShotView from "./src/learning/Images/SnapShotView";
import EyeBalls from "./src/trial/EyeBalls";
import PathComp from "./src/trial/PathComp";
import NeumophicButtons from "./src/trial/NeumophicButtons";
import ClipImageToPath from "./src/trial/ClipImageToPath";
import { CircleAnimation } from "./src/learning/Animations/CircleAnimation";
import { ColorsAnimation } from "./src/learning/Animations/ColorsAnimation";
import { GestureAnimation } from "./src/learning/Animations/GestureAnimation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { GestureTracking } from "./src/learning/Animations/GestureTracking";
import GestureCircleTracking from "./src/trial/Animations/GestureCircleTracking";
import { UsePathInterpolationDemo } from "./src/learning/Hooks/UsePathInterpolationDemo";
import UseClock from "./src/learning/Hooks/UseClock";
import CanvasSize from "./src/learning/Animations/CanvasSize";

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
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
        {/* <BlurImage />
      <BlurImageFilter/> */}
        {/* <BoxShadow_Neumophism/> */}
        {/* <DisplacementMapComponent/> */}
        {/* <BackDropFiltersComponent/> */}
        {/* <BlurMaskComponent/> */}
        {/* <LerpColorFilter/> */}
        {/* <AlphaMaskComponent/> */}
        {/* <SvgComponent/> */}
        {/* <ScaledSVGComponent/> */}
        {/* <SnapShotView/> */}
        {/* <EyeBalls/> */}
        {/* <PathComp/> */}
        {/* <NeumophicButtons/> */}
        {/* <CircleAnimation/> */}
        {/* <ColorsAnimation /> */}
        {/* <ClipImageToPath /> */}
        {/* <GestureAnimation /> */}
        {/* <GestureTracking/> */}
        {/* <GestureCircleTracking/> */}
        {/* <UsePathInterpolationDemo/> */}
        {/* <UseClock/> */}
        {/* <CanvasSize/> */}
        <PathComponent/>
      </GestureHandlerRootView>
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
