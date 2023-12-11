import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const DayDetailsScreens = () => {
  return (
    <View style={style.view}>
      <Stack.Screen options={{ title: "Day 3: MarkDown", headerStyle:{backgroundColor:"#15141A",}, headerTitleStyle:{color:"#ffffff"}, headerBackTitle:"Back"}} />

      <Link href="days/day3/editor" asChild>
        <Button title="Go to editor" color={"#ffffff"} />
      </Link>
    </View>
  );
};

const style = StyleSheet.create({
  view:{
    alignItems:'center',
  justifyContent:'center',
  flex:1,
  backgroundColor:"#15141A"
  }
})

export default DayDetailsScreens;
