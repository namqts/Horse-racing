import React from "react";
import LinearGradient from "react-native-linear-gradient";

export default function LinearGradientSilver({ children, style }) {
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.0 }}
      estart={{ x: 0.0, y: 0.0 }}
      end={{ x: 0.0, y: 1.0 }}
      useAngle={true}
      angle={180}
      locations={[0.0053, 0.0117, 0.3559, 0.6927, 0.9615, 1.0]}
      angleCenter={{ x: 0.5, y: 0.5 }}
      colors={["#555555", "#969696", "#F1F1F1", "#504F4F", "#A7A7A7", "#D0D0D0"]}
      style={style}
    >
      {children}
    </LinearGradient>
  );
}
