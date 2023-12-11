import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const DayDetailsScreens = () => {
  return (
    <SafeAreaView edges={['bottom']} style={style.view}>
      <Stack.Screen options={{ title: "Day 4: Splash Screen", headerStyle:{backgroundColor:"#15141A",}, headerTitleStyle:{color:"#ffffff"}, headerBackTitle:"Back"}} />

      <Text style={style.text}>Animated Splash Screen</Text>

      <Link href="days/day4/animation" asChild>
        <Button title="Go to Basic Animation" color={"#ffffff"}/>
      </Link>
      <Link href="days/day4/splash" asChild>
        <Button title="Go to Splash Screen Animation" color={"#ffffff"}/>
      </Link>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  view:{
  flex:1,
  backgroundColor:"#15141A",
  padding:20
  },
  text:{
    fontSize:50,
    fontFamily:"InterBlack",
    color:"white",
    flex:1,
    
  },
})

export default DayDetailsScreens;
