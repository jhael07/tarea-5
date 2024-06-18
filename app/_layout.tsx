import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const page = () => {
  return (
    <GestureHandlerRootView>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </GestureHandlerRootView>
  );
};

export default page;
