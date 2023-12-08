import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        title: "#DEVember"
      }}
    >
        <Stack.Screen name="index" options={{title:"DEVember"}}/>
    </Stack>
  );
}
