import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { Entypo } from "@expo/vector-icons";

const index = () => {
  const ref = useRef<any>();

  const images: string[] = [
    "https://c4.wallpaperflare.com/wallpaper/270/151/624/breaking-bad-actors-bryan-cranston-walter-white-men-with-glasses-2992x4016-animals-horses-hd-art-wallpaper-preview.jpg",
    "https://wallpaper.forfun.com/fetch/f7/f77716eb42425677360b05cadd8f45fd.jpeg?h=900&r=0.5",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNHFvdXWgW0W_otEQxcXRMVRcebYaa5E3GEw&s",
    "https://wallpapers.com/images/hd/breaking-bad-jesse-and-walter-w996h9ea1qgbqf33.jpg",
  ];

  const [imagesArr, setImagesArr] = useState<string[]>(images);

  const scrollToIndex = (index: number) => {
    if (index === -1) {
      return;
    }
    if (index >= imagesArr.length) {
      setImagesArr((prev) => [...prev, ...images]);
      ref?.current?.scrollToIndex({
        animated: true,
        index: 0,
      });
      return;
    }

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
          onEndReached={() => setImagesArr((prev) => [...prev, ...images])}
          onEndReachedThreshold={0}
          data={imagesArr}
          ref={ref}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <>
                <Image
                  height={900}
                  width={Dimensions.get("screen").width}
                  source={{
                    uri: item,
                  }}
                  resizeMode="cover"
                />
                <View
                  style={{
                    position: "absolute",
                    left: 12,
                    top: Dimensions.get("screen").height / 2.1,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#000000",
                      opacity: 0.7,
                      padding: 10,
                      borderRadius: 100,
                      borderColor: "lightgray",
                      borderWidth: 1,
                    }}
                    onPress={() => scrollToIndex(index - 1)}
                  >
                    <Entypo name="chevron-left" size={32} color="white" />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    position: "absolute",
                    right: 12,
                    top: Dimensions.get("screen").height / 2.1,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#000000",
                      opacity: 0.7,
                      padding: 10,
                      borderRadius: 100,
                      borderColor: "lightgray",
                      borderWidth: 1,
                    }}
                    onPress={() => scrollToIndex(index + 1)}
                  >
                    <Entypo name="chevron-right" size={32} color="white" />
                  </TouchableOpacity>
                </View>
              </>
            );
          }}
        />
      </View>
    </View>
  );
};

export default index;
