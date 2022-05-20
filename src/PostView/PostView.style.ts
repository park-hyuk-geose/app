import {StyleProp, ImageStyle, ViewStyle, TextStyle} from "react-native"

const style = {
  post: <StyleProp<ViewStyle>>{
    backgroundColor: 'white',
    paddingHorizontal: 5,
  },
  userinfo: <StyleProp<ViewStyle>>{
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userimg: <StyleProp<ImageStyle>>{
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
  },
  username: <StyleProp<TextStyle>>{
    marginHorizontal: 10,
  },
    usertext: <StyleProp<TextStyle>>{
    marginVertical: 10,
  },
  useract: <StyleProp<ViewStyle>>{
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent : 'space-between',
  },
  
}

export default style
