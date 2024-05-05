import { View, Text, Image } from "react-native";
import React from "react";
import { icons } from "../constants";

const NavigationBar = () => {
  return (
    <View className="flex-row justify-between w-full items-center">
      <Image
        source={icons.menu}
        resizeMode="contain"
        className="w-[30px] h-[30px]"
      />
      <View className="p-2.5 bg-black rounded-full">
        <Image
          source={icons.search}
          resizeMode="contain"
          className="w-[20px] h-[20px]"
        />
      </View>
    </View>
  );
};

export default NavigationBar;
