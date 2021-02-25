import React from 'react'
import { ImageBackground } from 'react-native';

import obstacleTop from '../../../../assets/imgStrategy/obstacleTop.png'
import obstacleBottom from '../../../../assets/imgStrategy/obstacleBottom.png'

const Obstacles = ({
    obstaclesLeft,
    obstacleWidth,
    obstacleHeight,
    gap,
    randomBottom }) => {
    return (
        <>
            <ImageBackground 
            source={obstacleTop}
            style={{
                position: 'absolute',
                width: obstacleWidth,
                height: obstacleHeight,
                left: obstaclesLeft,
                bottom: randomBottom + obstacleHeight + gap,
            }} />
            <ImageBackground 
            source={obstacleBottom}
            style={{
                position: 'absolute',
                width: obstacleWidth,
                height: obstacleHeight,
                left: obstaclesLeft,
                bottom: randomBottom
            }} />
        </>
    )
}

export default Obstacles;
