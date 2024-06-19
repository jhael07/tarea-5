import { View, Text, Dimensions } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const CustomHeader = ({ title }: { title: string }) => {
  return (
    <View
      style={{
        width: Dimensions.get("screen")?.width,
        backgroundColor: "#000000",
        borderBottomColor: Colors.main[950],
        padding: 20,
        paddingTop: 52,
      }}
    >
      <Text style={{ color: Colors.main[500], fontSize: 28, fontWeight: "600" }}>{title}</Text>
    </View>
  );
};

export default CustomHeader;
