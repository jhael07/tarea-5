import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import CustomHeader from "@/components/CustomHeader";

const index = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
      <CustomHeader title="Momentos" />
    </SafeAreaView>
  );
};

export default index;
