import { View, Image, FlatList, Dimensions, Text, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import CarouselButton from "@/components/Home/CarouselButton";
import { useFonts } from "expo-font";

const index = () => {
  const [fontsLoaded, fontError] = useFonts({
    Main: require("../../assets/SairaCondensed-ExtraBold.ttf"),
  });

  console.log(fontsLoaded, fontError);

  const ref = useRef<any>();

  const images: { img: string; phrase: string }[] = [
    {
      img: "https://c4.wallpaperflare.com/wallpaper/270/151/624/breaking-bad-actors-bryan-cranston-walter-white-men-with-glasses-2992x4016-animals-horses-hd-art-wallpaper-preview.jpg",
      phrase: "Tú conoces el negocio, y yo conozco la química",
    },
    {
      img: "https://64.media.tumblr.com/1a0bc41b0a8adbc25bf20d225a24e732/tumblr_n4n7hb8kwu1szeb38o1_1280.jpg",
      phrase: "Estoy en el negocio del imperio.",
    },
    {
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f2e3247-62d6-4d91-8b66-596cdde4d62b/dfn34kv-b80f3446-1c0e-4995-b3ed-3d3e9e1c5451.jpg/v1/fit/w_828,h_1794,q_70,strp/breaking_bad_wallpaper_for_iphone_by_v_mozz_by_v_mozz_dfn34kv-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwOSIsInBhdGgiOiJcL2ZcLzFmMmUzMjQ3LTYyZDYtNGQ5MS04YjY2LTU5NmNkZGU0ZDYyYlwvZGZuMzRrdi1iODBmMzQ0Ni0xYzBlLTQ5OTUtYjNlZC0zZDNlOWUxYzU0NTEuanBnIiwid2lkdGgiOiI8PTMzMjkifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.2kvqX2PBAJSR-hn0dd_vzTzL1eyF1VhBXFMYcHFLv-o",
      phrase: "Terminamos cuando yo digo que terminamos.",
    },
    {
      img: "https://wallpapers.com/images/hd/breaking-bad-jesse-and-walter-w996h9ea1qgbqf33.jpg",
      phrase: "No estoy en peligro, Skyler. Yo soy el peligro.",
    },
  ];

  const scrollToIndex = (index: number) => {
    if (index === -1) return;
    if (index >= images.length) return;

    ref?.current?.scrollToIndex({
      animated: true,
      index: index,
    });
  };

  return (
    <View>
      <StatusBar style="light" />
      <Stack.Screen
        options={{
          headerTransparent: true,
          statusBarTranslucent: true,
        }}
      />
      <View style={{ width: "100%", height: "100%", position: "relative" }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          initialNumToRender={4}
          onEndReachedThreshold={0}
          data={images}
          ref={ref}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <>
                <Image
                  height={900}
                  width={Dimensions.get("screen").width}
                  source={{
                    uri: item.img,
                  }}
                  resizeMode="cover"
                />
                <View style={style.containerText}>
                  <Text style={style.text}>{item.phrase}</Text>
                </View>
                <CarouselButton type="left" onPress={() => scrollToIndex(index - 1)} />
                <CarouselButton type="right" onPress={() => scrollToIndex(index + 1)} />
              </>
            );
          }}
        />
      </View>
    </View>
  );
};

export default index;

const style = StyleSheet.create({
  containerText: {
    position: "absolute",
    bottom: 120,
    left: Dimensions.get("screen").width / 12,
    opacity: 0.8,
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: "#000000",
    maxWidth: Dimensions.get("screen").width / 1.2,
    minWidth: Dimensions.get("screen").width / 1.2,
    borderRadius: 16,
  },
  text: {
    color: "white",
    fontWeight: "600",
    fontSize: 36,
    fontFamily: "Main",
  },
});
