import React from 'react'
import { ImageBackground } from 'react-native';
import condor from '../../../../assets/imgStrategy/condorFly.png'

const Bird = ({ birdBottom, birdLeft }) => {

    const birdWith = 100;
    const birdHeight = 60;
    return (
        <ImageBackground style={{
            position: 'absolute',
            width: birdWith,
            height: birdHeight,
            left: birdLeft - (birdWith / 2),
            bottom: birdBottom - (birdHeight / 2)
        }} source={condor}/>
    )
}

export default Bird;
