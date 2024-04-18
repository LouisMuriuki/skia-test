import React from 'react'
import { Canvas, Oval } from '@shopify/react-native-skia'
import { height, width } from '../../../dataStore'

const OvalComponent = () => {
  return (
    <Canvas style={{width,height}}>
        <Oval x={54} y={40} color="blue" height={120} width={60} style="stroke"/>
    </Canvas>
  )
}

export default OvalComponent