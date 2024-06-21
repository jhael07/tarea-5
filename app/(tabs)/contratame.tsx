import { View, Text, Image } from "react-native";
import React from "react";
import CustomHeader from "@/components/CustomHeader";
import { Colors } from "@/constants/Colors";

const index = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <CustomHeader title="Contratame" />
      <Image
        source={require("../../assets/images/jhael.jpeg")}
        style={{
          alignSelf: "center",
          height: 260,
          width: 260,
          borderRadius: 16,
          marginTop: 20,
        }}
        resizeMode="cover"
      />

      <View
        style={{
          width: 260,
          backgroundColor: Colors.main[500],
          padding: 12,
          borderRadius: 16,
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 24,
            alignSelf: "center",
            fontWeight: "500",
          }}
        >
          Jhael Rodriguez
        </Text>
      </View>

      <View
        style={{
          width: 260,
          backgroundColor: Colors.main[500],
          padding: 12,
          borderRadius: 16,
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
            alignSelf: "center",
            fontWeight: "500",
          }}
        >
          LinkedIn: Jhael Rodriguez
        </Text>
      </View>

      <View
        style={{
          width: 260,
          backgroundColor: Colors.main[500],
          padding: 12,
          borderRadius: 16,
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
            alignSelf: "center",
            fontWeight: "500",
          }}
        >
          Telefono: 809-309-4737
        </Text>
      </View>
    </View>
  );
};

export default index;
