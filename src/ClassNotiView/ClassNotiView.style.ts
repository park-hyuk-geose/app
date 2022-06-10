import {StyleProp, ImageStyle, ViewStyle, TextStyle} from "react-native"

const style = {
  post: <StyleProp<ViewStyle>>{
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#b0b0b0',
  },
  userinfo: <StyleProp<ViewStyle>>{
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  userflex: <StyleProp<ViewStyle>>{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  userimg: <StyleProp<ImageStyle>>{
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
  },
  username: <StyleProp<TextStyle>>{
    paddingHorizontal: 10,
  },
  text: <StyleProp<TextStyle>>{
    marginVertical: 10,
  },
  imgview: <StyleProp<ViewStyle>> {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  img: <StyleProp<ImageStyle>>{
    width: 230,
    height: 300
  },
  useract: <StyleProp<ViewStyle>>{
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent : 'space-between',
  },
  acticon: <StyleProp<ViewStyle>>{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent : 'center',
    height: 'auto',
    width: 70,
  },
  
}

export default style
