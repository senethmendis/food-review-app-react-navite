import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
import { useNavigation } from "@react-navigation/native";

const FoodCard = ({ name, price, img }) => {
  const [toggle, setToggle] = useState(false);
  const navigation = useNavigation();
  return (
    <View className="w-[200px] h-[300px]  flex-col justify-between items-center bg-white  rounded-2xl mr-4">
      <TouchableOpacity
        className="w-full h-[150px] flex justify-center items-center rounded-2xl"
        onPress={() => {
          navigation.navigate("Meal");
        }}
      >
        <ImageBackground
          source={{ uri: img }}
          className="w-full h-full bg-red-400 rounded-2xl"
          resizeMode="cover"
        />
      </TouchableOpacity>
      <View className="w-full  space-y-2 px-3 pt-4">
        <Text className="text-xl font-semibold">
          {name.length > 16 ? name.slice(0, 16) : name}
        </Text>
        <Text className="text-md font-semibold">{price}</Text>
        <View className="flex-row justify-between py-5">
          <Image
            source={icons.plus}
            resizeMode="contain"
            style={{ width: 35, height: 35 }}
          />
          <TouchableOpacity onPress={() => setToggle(!toggle)}>
            {toggle ? (
              <Image
                source={icons.favIconFilled}
                resizeMode="contain"
                style={{ width: 30, height: 30 }}
              />
            ) : (
              <Image
                source={icons.favIcon}
                resizeMode="contain"
                style={{ width: 30, height: 30 }}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FoodCard;
