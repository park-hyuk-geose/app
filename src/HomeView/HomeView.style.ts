import {ImageStyle, StyleProp, ViewStyle} from "react-native"

const style = {
  title: <StyleProp<ViewStyle>>{
    paddingTop: 35,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    zIndex: 99999,
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
    elevation: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }, 
  main: <StyleProp<ViewStyle>>{
    marginTop: 85,
  },
  userimg: <StyleProp<ImageStyle>>{
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
  },
}

export default style
