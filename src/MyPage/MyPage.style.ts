import {ImageStyle, StyleProp, ViewStyle} from "react-native"

const style = {
  userimg: <StyleProp<ImageStyle>>{
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
  },
  pressable: <StyleProp<ViewStyle>>{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  content: <StyleProp<ViewStyle>>{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: <StyleProp<ViewStyle>>{
    marginLeft: 10
  }
}

export default style
