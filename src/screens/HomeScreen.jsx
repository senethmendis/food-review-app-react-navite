import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { categoriesList, meals } from "../constants";
import NavigationBar from "../components/NavigationBar";
import CategorieScroller from "../components/CategorieScroller";
import FoodCard from "../components/FoodCard";

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState("Popular");

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          height: "100%",
          paddingHorizontal: 15,
        }}
      >
        <View>
          <NavigationBar />
        </View>
        <View className="py-6 space-y-4">
          <Text className="text-2xl font-bold">Delicious Seafood</Text>
          <Text className="text-lg text-neutral-400">
            We made Headthy seafood for you
          </Text>
        </View>

        <View className="py-4">
          <CategorieScroller
            categoriesList={categoriesList}
            setActiveCategory={setActiveCategory}
            activeCategory={activeCategory}
          />
        </View>

        {/* popular food card */}
        <View className="py-4">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {meals.map((meal, i) => {
              return (
                <FoodCard
                  name={meal.name}
                  price={meal.price}
                  img={meal.image}
                  key={i}
                />
              );
            })}
          </ScrollView>
        </View>

        <View>
          <Text>Test</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
