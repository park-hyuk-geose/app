import {StyleProp, ViewStyle, TextStyle} from "react-native"

const style = {
  outer: <StyleProp<ViewStyle>>{
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    height: 35,
    borderBottomWidth: 1,
    borderBottomColor: '#b0b0b0',
  },
  inner: <StyleProp<ViewStyle>>{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 3,
    width: 100,
  },
  innerText: <StyleProp<TextStyle>>{
    paddingHorizontal: 4,
    paddingBottom: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#4F46E5',
  },
  innerTextFalse: <StyleProp<TextStyle>>{
    paddingHorizontal: 4,
    paddingBottom: 2,
  }
}

export default style
