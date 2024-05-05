import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ title, onPress, otherStyles, otherTextStyles }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${otherStyles} w-full h-[50px]  bg-orange-500 flex items-center justify-center rounded-full`}
    >
      <Text className={`text-xl text-white ${otherTextStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
