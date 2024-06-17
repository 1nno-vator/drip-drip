import { Stack } from "expo-router";

export default function DripLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ff0000",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          color: "black",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "드립",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
