import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import CustomHeader from "@/components/CustomHeader";
import { VideoView, useVideoPlayer } from "expo-video";
import { Video } from "expo-av";

const index = () => {
  // const videoRef = useRef<any>(null);
  // const player = useVideoPlayer(videoSource, (player) => {
  //   player.play();
  // });

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <CustomHeader title="En mi vida" />
      {/* <VideoView
          ref={videoRef}
          player={player}
          allowsFullscreen
          allowsPictureInPicture
        /> */}
      <Video
        style={{
          width: 160,
          height: 340,
          alignSelf: "center",
          borderRadius: 16,
          marginTop: 60,
          borderColor: "white",
          borderWidth: 1,
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
        source={require("../../assets/video/video.mp4")}
        shouldPlay
      />
    </View>
  );
};

export default index;
