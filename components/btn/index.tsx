import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Button = ({ handlePressOut, zIndex, color, width, height, radius, handlePress, text, fontColor, position, top, left, right, bottom }: any) => {
  return (
    <TouchableOpacity
      onPressIn={handlePress}
      onPressOut={handlePressOut}
      style={{
        backgroundColor: color,
        borderRadius: radius,
        width: width,
        height: height,
        justifyContent: "center",
        alignItems: "center",
        position: position,
        top: top,
        left: left,
        right: right,
        bottom: bottom,
        zIndex: zIndex,
      }}
    >
      <Text style={{fontSize: 16, color: fontColor}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
