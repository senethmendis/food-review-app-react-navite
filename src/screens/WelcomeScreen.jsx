import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { Link, useNavigation } from "@react-navigation/native";
import { images } from "../constants";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../components/CustomButton";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <View className="w-full justify-center items-center min-h-[86vh] px-4">
        <Image
          source={images.splashImg}
          resizeMode="contain"
          className="w-[350px] h-[350px]"
        />
        <View className="w-full justify-center flex items-center ">
          <Text className="py-5 text-2xl font-semibold">Dellicious Food</Text>
          <Text className="text-center text-neutral-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            officiis.
          </Text>
          <CustomButton
            title="Next"
            onPress={() => {
              navigation.navigate("Home");
            }}
            otherStyles="my-4"
          />
        </View>
      </View>
      <StatusBar style="dark" animated={true} />
    </>
  );
};

export default WelcomeScreen;
