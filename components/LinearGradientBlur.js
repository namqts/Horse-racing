import React from "react";
import LinearGradient from "react-native-linear-gradient";

export default function LinearGradientPrimary({ children, style }) {
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.0 }}
      estart={{ x: 0.0, y: 0.0 }}
      end={{ x: 0.0, y: 1.0 }}
      useAngle={true}
      angle={180}
      locations={[0.0, 1.0]}
      angleCenter={{ x: 0.5, y: 0.5 }}
      colors={["#FF2D2D", "#AB1E1E"]}
      style={style}
    >
      {children}
    </LinearGradient>
  );
}
