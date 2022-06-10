import {StyleProp, TextStyle, ViewStyle, ScrollView} from "react-native"

const style = {
  homecontainer: <StyleProp<ViewStyle>>{
    backgroundColor: "#fff",
  },
  container: <StyleProp<ViewStyle>> {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10
  },
  items: <StyleProp<ViewStyle>> {
    backgroundColor: 'white',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#a0a0a0',
    borderRadius: 10,
    padding: 10,
    width: 150,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  labels: <StyleProp<TextStyle>> {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  label: <StyleProp<TextStyle>> {
    textAlignVertical: 'center',
    borderWidth: 1,
    borderColor: '#a0a0a0',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100
  },
  date: <StyleProp<TextStyle>> {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-end',
    marginTop: 10
  }
}

export default style
