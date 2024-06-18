import { GestureResponderEvent } from "react-native";

export type CarouselButtonType = {
  type: "left" | "right";
  onPress?: (event: GestureResponderEvent) => void;
};
