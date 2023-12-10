import { Link, Stack, router } from "expo-router";
import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import {} from "react-native-safe-area-context";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";

import Animated, {
  FadeIn,
  FadeOut,
  SlideInLeft,
  SlideInRight,
  SlideOutLeft,
  SlideOutRight,
} from "react-native-reanimated";

const onboardingSteps = [
  {
    icon: "snowflake",
    title: "Welcome to #DEVember",
    description: "Daily React Native Tutorials during December",
  },
  {
    icon: "book",
    title: "Learn and Grow together",
    description: "Lern by Building 24 projects with React Native and Expo",
  },
  {
    icon: "book-reader",
    title: "Education for Children",
    description:
      'Contribute to the fundraiser "Education for Children" to help to save the children in their effort of providing education to every child',
  },
];

export default function OnboardingScreen() {
  const [screenIndex, setScreenIndex] = useState(0);
  const data = onboardingSteps[screenIndex];

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;
    if (isLastScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };
  const onBack = () => {
    const isFirstScreen = screenIndex === 0;
    if (isFirstScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const endOnboarding = () => {
    setScreenIndex(0);
    router.back();
  };

  // Forward
  const swipeForward = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd(onContinue);
  // Back
  const swipeBackward = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onEnd(onBack);

  const swipes = Gesture.Simultaneous(swipeBackward, swipeForward);

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />

      <View style={styles.setIndicatorContainer}>
        {onboardingSteps.map((steps, index) => (
          <View
            key={index}
            style={[
              styles.setIndicator,
              { backgroundColor: index === screenIndex ? "#CEF202" : "gray" },
            ]}
          />
        ))}
      </View>

      <GestureDetector gesture={swipes}>
        <View key={screenIndex} style={styles.pageContent}>
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <FontAwesome5
              name={data.icon}
              size={150}
              color="#CEF202"
              style={styles.image}
            />
          </Animated.View>

          <View style={styles.footer}>
            <Animated.Text
              entering={SlideInRight}
              exiting={SlideOutLeft}
              style={styles.title}
            >
              {data.title}
            </Animated.Text>
            <Animated.Text
              entering={SlideInRight.delay(50)}
              exiting={SlideOutLeft}
              style={styles.description}
            >
              {data.description}
            </Animated.Text>

            <View style={styles.buttonsRow}>
              <Text onPress={endOnboarding} style={styles.buttonsText}>
                Skip
              </Text>

              <Pressable style={styles.button} onPress={onContinue}>
                <Text style={styles.buttonsText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    // alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#15141A",
  },
  pageContent: {
    padding: 30,
    flex: 1,
  },
  image: {
    alignSelf: "center",
    margin: 20,
    marginTop: 70,
  },
  title: {
    color: "#FDFDFD",
    fontSize: 50,
    fontFamily: "InterBlack",
    marginVertical: 10,
    letterSpacing: 1.2,
  },
  description: {
    color: "gray",
    fontSize: 20,
    fontFamily: "Inter",
    lineHeight: 28,
  },
  footer: {
    marginTop: "auto",
  },
  buttonsRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "#302E38",
    // padding:15,
    borderRadius: 50,
    alignItems: "center",
    flex: 1,
  },
  buttonsText: {
    color: "#FDFDFD",
    fontFamily: "InterBold",
    fontSize: 16,

    padding: 15,
    paddingHorizontal: 25,
  },
  setIndicatorContainer: {
    flexDirection: "row",
    gap: 8,
    marginHorizontal: 15,
  },
  setIndicator: {
    flex: 1,
    height: 5,
    backgroundColor: "gray",
    borderRadius: 10,
  },
});
