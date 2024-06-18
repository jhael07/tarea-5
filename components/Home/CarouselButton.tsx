import { View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { CarouselButtonType } from "@/ts/types";
import style from "./CarouselButtonCSS";

const CarouselButton = ({ onPress, type }: CarouselButtonType) => {
  return (
    <View style={[style.container, type === "left" ? { left: 12 } : { right: 12 }]}>
      <TouchableOpacity style={style.btn} onPress={onPress}>
        <Entypo name={`chevron-${type}`} size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default CarouselButton;
