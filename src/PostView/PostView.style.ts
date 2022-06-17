import {StyleProp, ImageStyle, ViewStyle, TextStyle} from "react-native"

const style = {
  chattingPost: <StyleProp<ViewStyle>>{
    backgroundColor: 'white',
    height:"100%",
    flexGrow: 0,
  },
  chattingPostNull: {
    flexGrow: 0,
  },
  post: <StyleProp<ViewStyle>>{
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#b0b0b0',
    flexGrow: 0,
  },
  userinfo: <StyleProp<ViewStyle>>{
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexGrow: 0,
  },
  userflex: <StyleProp<ViewStyle>>{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 0,
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
  chat: <StyleProp<ViewStyle>>{
    // display: 'flex',
    height: '100%',
    // backgroundColor: 'red',
    // flexDirection: 'column',
    // justifyContent: 'space-between'
  },
  chatView: <StyleProp<ViewStyle>>{
    borderBottomWidth: 1,
    height: 50,
    borderBottomColor: '#b0b0b0',
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  chatImg: <StyleProp<ImageStyle>>{
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
  },
  chatText: <StyleProp<TextStyle>>{
    // textAlign: 'center',
    padding: 5,
  },
  input: <StyleProp<ViewStyle>>{
    width: "100%",
    
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#b0b0b0',
  },
  chatInputView: <StyleProp<ViewStyle>>{
    width: "90%",
    display: 'flex',
    flexDirection: 'row',
  },
  chatInput: <StyleProp<TextStyle>>{
    padding: 5,
    height: 50,
    width: "85%",
    borderColor: '#b0b0b0',
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginLeft: 5,
  },
  submitButton: {
    backgroundColor: '#4F46E5',
    padding: 10,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
 },
 submitButtonText:{
    color: 'white',
  }
}

export default style
