import { View, Text, SafeAreaView, Image, FlatList } from "react-native";
import React from "react";
import CustomHeader from "@/components/CustomHeader";
import { useFonts } from "expo-font";

const index = () => {
  useFonts({
    Main: require("../../assets/SairaCondensed-Bold.ttf"),
  });

  const moments = [
    {
      id: 0,
      title: "El asesinato de Gale Boetticher",
      img: "https://i.ytimg.com/vi/ZLVRN3fZ1QU/maxresdefault.jpg",
      description:
        "Jesse Pinkman, bajo la presión de Walter White, asesina a Gale Boetticher para garantizar que Gus Fring no pueda deshacerse de ellos.",
    },

    {
      id: 2,
      title: "La confesión de Walter",
      img: "https://dl9fvu4r30qs1.cloudfront.net/7c/aa/495ed1fb4e2f96c607c18640b030/bb9.png",
      description:
        "Walter White graba una confesión en video donde culpa a Hank Schrader de ser el verdadero Heisenberg, utilizando esto como una estrategia para protegerse.",
    },
    {
      id: 1,
      title: "La muerte de Gus Fring",
      img: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/cdn/cd9421dc-708d-45f4-ad88-1b036f6c9b93/c1b50e1b-5c3d-4907-8120-d9f19c2e0c80_560_420.jpg",
      description:
        "Walter White coloca una bomba en la silla de ruedas de Héctor Salamanca para asesinar a Gus Fring, quien muere en una explosión en el asilo.",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
      <CustomHeader title="Momentos" />
      <View style={{ marginTop: 12 }}>
        <FlatList
          data={moments}
          ItemSeparatorComponent={() => <View style={{ height: 28 }} />}
          ListFooterComponent={() => <View style={{ height: 160 }} />}
          renderItem={({ item: { id, description, img, title } }) => (
            <View style={{ gap: 20 }}>
              <View style={{ padding: 8, paddingHorizontal: 12 }}>
                <Text
                  style={{ fontSize: 24, color: "white", fontWeight: "500", fontFamily: "Main" }}
                >
                  {title}
                </Text>
              </View>
              <Image
                source={{
                  uri: img,
                }}
                width={450}
                height={280}
                style={{
                  alignSelf: "center",
                  borderRadius: 10,
                }}
              />
              <View style={{ padding: 8, paddingHorizontal: 16, alignSelf: "center" }}>
                <Text style={{ fontSize: 16, color: "gray", lineHeight: 24, textAlign: "justify" }}>
                  {description}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default index;
