import {StyleProp, ViewStyle} from "react-native";

const style = {
  floatbtn: <StyleProp<ViewStyle>>{
    width: 60,  
    height: 60,   
    borderRadius: 30,            
    borderColor: '#aaa',
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',                                          
    bottom: 30,                                                    
    right: 30,
    backgroundColor: '#fff'
  },
  body: <StyleProp<ViewStyle>>{
    height: '100%'
  }
}

export default style
