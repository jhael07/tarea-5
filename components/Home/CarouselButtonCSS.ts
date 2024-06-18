import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    position: "absolute",
    top: Dimensions.get("screen").height / 2.1,
  },
  btn: {
    backgroundColor: "#000000",
    opacity: 0.7,
    padding: 10,
    borderRadius: 100,
    borderColor: "lightgray",
    borderWidth: 1,
  },
});
