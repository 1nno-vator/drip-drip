import { Stack } from "expo-router";

export default function DripLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#e83030",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "드립",
        }}
      />
    </Stack>
  );
}
