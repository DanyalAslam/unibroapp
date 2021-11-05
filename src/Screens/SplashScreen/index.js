import React, { useRef, useState } from "react";
import { Text, View, FlatList, ImageBackground, Animated, Image } from 'react-native';
import splashBackground from '../../assets/images/backgrounds/splashBackground.jpeg';
import logoRremovebg from '../../assets/images/backgrounds/logoRremovebg.png';


const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current


  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 3000,
      }
    ).start();
  }, [fadeAnim])



  return (
    <ImageBackground
      resizeMode='cover'
      source={splashBackground}
      style={{
        height: 900, width: 400,

      }}
      imageStyle={{ opacity: 0.4 }}
    >

      <Animated.View                 // Special animatable View
        style={{
          justifyContent: "center", alignItems: "center",
          height: 900, width: 400,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        <Image source={logoRremovebg} style={{ height: 200, width: 200 }} />
      </Animated.View>

    </ImageBackground>
  );
}
export default SplashScreen;