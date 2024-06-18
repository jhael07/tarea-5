import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useRef, useState } from "react";
import { useFonts } from "expo-font";
import { Colors } from "@/constants/Colors";
import CustomHeader from "@/components/CustomHeader";

import { Gesture, GestureDetector } from "react-native-gesture-handler";
const view = () => {
  useFonts({
    Main: require("../../assets/SairaCondensed-ExtraBold.ttf"),
  });

  const [characterSelected, setCharacterSelected] = useState<number>(1);

  const characters = [
    {
      id: 1,
      picture:
        "https://w0.peakpx.com/wallpaper/967/528/HD-wallpaper-walter-white-breaking-bad-movie-walt.jpg",
      name: "Walter White",
      description: `Profesor de química convertido en narcotraficante, lucha contra el cáncer y se transforma en el despiadado "Heisenberg" para asegurar el futuro financiero de su familia.`,
    },
    {
      id: 2,
      picture: "https://mfiles.alphacoders.com/661/661541.jpg",
      name: "Jesse Pinkman",
      description: `Exalumno y socio de Walter White, lucha con adicciones y dilemas morales mientras fabrica metanfetaminas, buscando redención a lo largo de la serie.`,
    },
    {
      id: 3,
      picture: "https://i.pinimg.com/736x/f7/06/a2/f706a27070d658ffbd14fb3b79009a23.jpg",
      name: "Gustavo Fring",
      description: `Carismático y reservado, utiliza su restaurante Los Pollos Hermanos como fachada para su operación de metanfetaminas, manteniendo una doble vida impecable y letal`,
    },
  ];

  const ref = useRef<any>();

  const scrollToIndex = (index: number) => {
    if (index === -1) return;
    if (index >= characters.length) return;

    ref?.current?.scrollToIndex({
      animated: true,
      index: index,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
      <CustomHeader title="Personajes" />
      <View style={{ height: 42, alignItems: "center", justifyContent: "center", marginTop: 24 }}>
        <FlatList
          data={[
            { name: "Walter White", id: 1 },
            { name: "Jesse Pinkman", id: 2 },
            { name: "Gustavo Fring", id: 3 },
          ]}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 24 }} />}
          ref={ref}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  scrollToIndex(index);
                  setCharacterSelected(item.id);
                }}
                style={{
                  padding: 4,
                  paddingHorizontal: 12,
                  backgroundColor:
                    characterSelected === item.id ? Colors.secondary[500] : Colors.main[800],
                  borderRadius: 16,
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: index === 0 ? 28 : 0,
                  marginRight: index === 2 ? 24 : 0,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {characters.map(
        (item) =>
          item.id === characterSelected && (
            <View style={{ position: "relative" }}>
              <Image
                width={360}
                height={420}
                style={{ alignSelf: "center", marginTop: 24, borderRadius: 16, overflow: "hidden" }}
                resizeMode="cover"
                source={{
                  uri: item.picture,
                }}
              />
              <View style={{ paddingHorizontal: 24, marginTop: 16, gap: 12 }}>
                <Text style={{ fontSize: 48, fontWeight: "500", color: "white" }}>{item.name}</Text>
                <Text
                  style={{ color: "white", textAlign: "justify", fontSize: 16, lineHeight: 28 }}
                >
                  {item.description}
                </Text>
              </View>
              <Pressable
                onTouchMove={(e) => {
                  if (characterSelected - 1 >= 1) {
                    scrollToIndex(characterSelected - 2);
                    setCharacterSelected(characterSelected - 1);
                  }
                }}
                style={{
                  width: 120,
                  height: Dimensions.get("screen").height / 1.4,
                  position: "absolute",
                  left: 0,
                }}
              ></Pressable>
              <Pressable
                onTouchMove={(e) => {
                  if (Math.floor(e.nativeEvent.locationX) < 300) {
                    if (characterSelected + 1 <= characters.length) {
                      scrollToIndex(characterSelected + 1);
                      setCharacterSelected(characterSelected + 1);
                    }
                  }
                }}
                style={{
                  width: 120,
                  height: Dimensions.get("screen").height / 1.4,
                  position: "absolute",
                  right: 0,
                }}
              ></Pressable>
            </View>
          )
      )}
    </SafeAreaView>
  );
};

export default view;
