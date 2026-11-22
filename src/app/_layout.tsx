import { Stack } from "expo-router";

/** Defines the root navigation stack and hides its default header. */
export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='(tabs)' />
    </Stack>
  );
}
