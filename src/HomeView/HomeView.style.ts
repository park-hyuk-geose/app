import {StyleProp, ViewStyle} from "react-native"

const style = {
  title: <StyleProp<ViewStyle>>{
    paddingTop: 35,
    backgroundColor: 'white',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

paddingHorizontal: 30,
paddingVertical: 15,
alignItems: 'center',
elevation: 6,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
  },  userimg: <StyleProp<ImageStyle>>{
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
  },
 
}

export default style
