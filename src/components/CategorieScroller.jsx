import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

const CategorieScroller = ({
  categoriesList,
  setActiveCategory,
  activeCategory,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="space-x-3"
    >
      {categoriesList.map((cat, i) => {
        return (
          <TouchableOpacity
            key={i}
            onPress={() => setActiveCategory(cat)}
            className={` ${
              cat == activeCategory ? "bg-black" : "bg-neutral-200"
            } w-[100px] h-[40px] justify-center items-center px-3 rounded-full`}
          >
            <Text
              className={` ${
                cat == activeCategory ? "text-white" : "text-black"
              } font-bold tracking-widest text-base`}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default CategorieScroller;
