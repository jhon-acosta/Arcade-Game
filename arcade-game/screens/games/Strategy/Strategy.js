import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, Dimensions, Text, TouchableWithoutFeedback, View } from 'react-native';
import tailwind from 'tailwind-rn';
import Bird from './components/Bird';
import Obstacles from './components/Obstacles';

import background from '../../../assets/imgStrategy/background.png'

const Strategy = ({ navigation }) => {

    const screenWidth = Dimensions.get("screen").width;
    const screenHeight = Dimensions.get("screen").height;
    const birdLeft = screenWidth / 2;
    const [birdBottom, setBirdBottom] = useState(screenHeight / 2);
    const [score, setScore] = useState(0)
    const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth);
    const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(screenWidth + screenWidth / 2 + 30);
    const [obstaclesNegHeight, setObstaclesNegHeight] = useState(0);
    const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo] = useState(0);
    const gravity = 3;
    const obstacleWidth = 60;
    const obstacleHeight = 300;
    const gap = 200;

    let gameTimerId;
    let obstaclesLeftTimerId;
    let obstaclesLeftTimerIdTwo;
    const [isGameOver, setIsGameOver] = useState(false);

    //start bird falling
    useEffect(() => {
        if (birdBottom > 0) {
            gameTimerId = setInterval(() => {
                setBirdBottom(birdBottom => birdBottom - gravity);
            }, 30);

            return () => {
                clearInterval(gameTimerId);
            }
        }
    }, [birdBottom])

    const jump = () => {
        if (!isGameOver && (birdBottom < screenHeight)) {
            setBirdBottom(birdBottom => birdBottom + 50)
            console.log('jumped')
        }
    }

    //start fist obstacules
    useEffect(() => {
        if (obstaclesLeft > -60) {
            obstaclesLeftTimerId = setInterval(() => {
                setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5)
            }, 30)

            return () => {
                clearInterval(obstaclesLeftTimerId)
            }
        } else {
            setObstaclesLeft(screenWidth)
            setObstaclesNegHeight(- Math.random() * 100);
            setScore(score + 1)
        }
    }, [obstaclesLeft])
    //start second obstacules
    useEffect(() => {
        if (obstaclesLeftTwo > -obstacleWidth) {
            obstaclesLeftTimerIdTwo = setInterval(() => {
                setObstaclesLeftTwo(obstaclesLeftTwo => obstaclesLeftTwo - 5)
            }, 30)

            return () => {
                clearInterval(obstaclesLeftTimerIdTwo)
            }
        } else {
            setObstaclesLeftTwo(screenWidth)
            setObstaclesNegHeightTwo(- Math.random() * 100);
            setScore(score + 1)
            console.log(score)
        }
    }, [obstaclesLeftTwo])

    //check for collisions
    useEffect(() => {
        console.log(obstaclesLeft)
        console.log(screenWidth / 2)
        console.log(obstaclesLeft > screenWidth / 2)
        if (
            ((birdBottom < (obstaclesNegHeight + obstacleHeight + 30) ||
                birdBottom > (obstaclesNegHeight + obstacleHeight + gap - 30)) &&
                (obstaclesLeft > screenWidth / 2 - 30 && obstaclesLeft < screenWidth / 2 + 30)
            )
            ||
            ((birdBottom < (obstaclesNegHeightTwo + obstacleHeight + 30) ||
                birdBottom > (obstaclesNegHeightTwo + obstacleHeight + gap - 30)) &&
                (obstaclesLeftTwo > screenWidth / 2 - 30 && obstaclesLeftTwo < screenWidth / 2 + 30)
            )
        ) {
            console.log('game over')
            gameOver()
        }
    })

    const gameOver = () => {
        clearInterval(gameTimerId)
        clearInterval(obstaclesLeftTimerId)
        clearInterval(obstaclesLeftTimerIdTwo)
        setIsGameOver(true);
    }

    return (
        <TouchableWithoutFeedback onPress={jump}>
          <View style={styles.container}>
            {isGameOver && <Text>{score}</Text>}
            <Bird 
              birdBottom = {birdBottom} 
              birdLeft = {birdLeft}
            />
            <Obstacles 
              color={'green'}
              obstacleWidth = {obstacleWidth}
              obstacleHeight = {obstacleHeight}
              randomBottom = {obstaclesNegHeight}
              gap = {gap}
              obstaclesLeft = {obstaclesLeft}
            />
            <Obstacles 
              color={'yellow'}
              obstacleWidth = {obstacleWidth}
              obstacleHeight = {obstacleHeight}
              randomBottom = {obstaclesNegHeightTwo}
              gap = {gap}
              obstaclesLeft = {obstaclesLeftTwo}
            />
          </View>
        </TouchableWithoutFeedback>
      )
    }

const styles = StyleSheet.create({
    container: tailwind('h-full justify-center items-center')
});

export default Strategy;

