import { View, Text } from "react-native";
import React from "react";
import { Canvas, DashPathEffect, DiscretePathEffect, Path } from "@shopify/react-native-skia";
import { width, height } from "../../dataStore";

const PathComp = () => {
  return (
    <Canvas style={{ width, height }}>
      <Path
        origin={{ x: 30, y: -60 }}
        // transform={[{ skewX: 1 }, { translateX: 10 }]}
        strokeWidth={1}
        style={"stroke"}
        color={"green"}
        path={
          "M17.38,23.36h-2.76c-0.199,0-0.36-0.161-0.36-0.36v-1.567l-0.869-0.363l-1.111,1.111 c-0.067,0.067-0.159,0.105-0.254,0.105l0,0c-0.096,0-0.187-0.038-0.254-0.105L9.82,20.229c-0.141-0.141-0.141-0.369,0-0.51 l1.108-1.107l-0.357-0.871H9c-0.199,0-0.36-0.161-0.36-0.36v-2.76c0-0.199,0.161-0.36,0.36-0.36h1.567l0.363-0.869L9.82,12.28 c-0.14-0.141-0.14-0.368,0-0.509l1.951-1.952c0.135-0.136,0.374-0.136,0.509,0l1.108,1.109l0.872-0.357V9 c0-0.199,0.161-0.36,0.36-0.36h2.76c0.199,0,0.36,0.161,0.36,0.36v1.567l0.868,0.363l1.11-1.111c0.135-0.135,0.375-0.136,0.51,0 l1.952,1.952c0.067,0.067,0.105,0.159,0.105,0.254c0,0.096-0.038,0.187-0.105,0.254l-1.109,1.108l0.357,0.872H23 c0.199,0,0.36,0.161,0.36,0.36v2.76c0,0.199-0.161,0.36-0.36,0.36h-1.567l-0.363,0.868l1.111,1.11 c0.067,0.067,0.105,0.159,0.105,0.255s-0.038,0.188-0.105,0.255l-1.952,1.952c-0.067,0.067-0.159,0.105-0.255,0.105l0,0 c-0.096,0-0.188-0.038-0.255-0.105l-1.107-1.109l-0.871,0.357V23C17.74,23.199,17.579,23.36,17.38,23.36z M14.98,22.64h2.04v-1.452 c0-0.146,0.089-0.277,0.224-0.333l1.316-0.54c0.134-0.057,0.288-0.024,0.392,0.078l1.022,1.024l1.443-1.443l-1.028-1.026 c-0.103-0.104-0.134-0.259-0.077-0.394l0.55-1.312c0.056-0.134,0.187-0.222,0.332-0.222h1.446v-2.04h-1.452 c-0.146,0-0.277-0.088-0.333-0.223l-0.54-1.316c-0.055-0.134-0.024-0.289,0.078-0.391l1.024-1.023l-1.443-1.443l-1.026,1.027 c-0.104,0.103-0.259,0.135-0.394,0.078l-1.312-0.549c-0.134-0.056-0.222-0.187-0.222-0.332V9.36h-2.04v1.452 c0,0.146-0.088,0.278-0.223,0.333l-1.316,0.54c-0.135,0.054-0.288,0.024-0.391-0.079l-1.023-1.023l-1.442,1.443l1.027,1.028 c0.103,0.103,0.134,0.259,0.077,0.394L11.14,14.76c-0.056,0.134-0.187,0.221-0.332,0.221H9.36v2.04h1.452 c0.146,0,0.278,0.089,0.333,0.224l0.54,1.316c0.055,0.135,0.024,0.289-0.079,0.392l-1.022,1.022l1.442,1.443l1.028-1.028 c0.104-0.104,0.259-0.133,0.394-0.077l1.312,0.55c0.134,0.056,0.221,0.187,0.221,0.332L14.98,22.64L14.98,22.64z M16,19.36 c-1.853,0-3.36-1.508-3.36-3.36s1.507-3.36,3.36-3.36s3.36,1.507,3.36,3.36S17.853,19.36,16,19.36z M16,13.36 c-1.456,0-2.64,1.185-2.64,2.64c0,1.456,1.185,2.64,2.64,2.64c1.456,0,2.64-1.184,2.64-2.64S17.456,13.36,16,13.36z M16,31.36 c-4.529,0-8.716-1.933-11.64-5.338V30H3.64v-5.36H9v0.721H4.743C7.536,28.725,11.598,30.64,16,30.64 c8.072,0,14.64-6.567,14.64-14.64h0.721C31.36,24.47,24.47,31.36,16,31.36z M1.36,16H0.64C0.64,7.53,7.53,0.64,16,0.64 c4.529,0,8.716,1.933,11.64,5.337V2h0.721v5.36H23V6.64h4.257C24.464,3.275,20.401,1.36,16,1.36C7.927,1.36,1.36,7.927,1.36,16z"
        }
      >
        {/* <DashPathEffect intervals={[5, 5]} /> */}
      </Path>
    </Canvas>
  );
};

export default PathComp;
