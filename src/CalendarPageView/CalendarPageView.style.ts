import {ImageStyle, StyleProp, TextStyle, ViewStyle} from "react-native"

const style = {
  container: <StyleProp<ViewStyle>> {
    margin: 5,
    backgroundColor: "white",
  },
  date: <StyleProp<TextStyle>> {
    fontSize: 12,
    padding: 5,
    textAlign: "center",
    backgroundColor: "#F1F5F9",
  }
}

export default style
