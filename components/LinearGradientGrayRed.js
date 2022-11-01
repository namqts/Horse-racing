import React from "react";
import LinearGradient from "react-native-linear-gradient";

export default function LinearGradientGrayRed({ children, style }) {
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.0 }}
      estart={{ x: 0.0, y: 0.0 }}
      end={{ x: 0.0, y: 1.0 }}
      useAngle={true}
      angle={180}
      angleCenter={{ x: 0.5, y: 0.5 }}
      locations={[0.0, 0.6279, 0.6868, 1.0]}
      colors={['#717171', '#424242', '#343434', '#343434']}
      style={style}
    >
      {children}
    </LinearGradient>
  );
}
