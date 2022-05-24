import {ImageStyle, StyleProp, TextStyle, ViewStyle} from "react-native"

const style = {
  view: <StyleProp<ViewStyle>>{
    marginVertical: 10
  },
  image: <StyleProp<ImageStyle>>{
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10
  },
  text: <StyleProp<TextStyle>>{
    width: 100,
    textAlign: 'center'
  }
}

export default style
