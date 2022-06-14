import {ImageStyle, StyleProp, TextStyle, ViewStyle} from "react-native"

const style = {
  view: <StyleProp<ViewStyle>>{
    marginVertical: 10
  },
  img: <StyleProp<ViewStyle>>{
    shadowColor: "#000",
    shadowOffset: {
        width: 3,
        height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 4.65,
    backgroundColor: '#0000',
    elevation: 6,
  },
  image: <StyleProp<ImageStyle>>{
    width: 100,
    height: 100,
    // borderWidth: 1,
    // borderColor: '#00000044',
    // borderRadius: 10,
  },
  text: <StyleProp<TextStyle>>{
    width: 100,
    textAlign: 'center'
  }
}

export default style
