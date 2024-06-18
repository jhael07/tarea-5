import React, { ElementType } from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const _layout = () => {
  const optionsConfig = (Icon: ElementType, name: string) =>
    ({
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <Icon name={name} size={28} color={focused ? Colors.main[500] : Colors.main[900]} />
      ),
      title: "",
      tabBarItemStyle: {
        marginTop: 8,
      },
      tabBarStyle: {
        height: 64,
        alignItems: "center",
        backgroundColor: "black",
        borderTopWidth: 0,
      },
    } as any);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={optionsConfig(Ionicons, "home")} />
      <Tabs.Screen name="personajes" options={optionsConfig(Ionicons, "people")} />
      <Tabs.Screen name="momentos" options={optionsConfig(Ionicons, "star")} />
      <Tabs.Screen name="mi-vida" options={optionsConfig(Ionicons, "body")} />
      <Tabs.Screen name="contratame" options={optionsConfig(Ionicons, "cash")} />
    </Tabs>
  );
};

export default _layout;
