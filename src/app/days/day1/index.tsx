import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const DayDetailsScreens = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 1" }} />
      
      <Text style={{ fontFamily: "AmaticBold", fontSize: 100 }}>
        Day Detail Screen1
      </Text>
    </View>
  );
};

export default DayDetailsScreens;
