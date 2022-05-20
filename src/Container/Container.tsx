import {View} from "react-native";
import style from './Container.style'

const Container = ({ children }: any) =>
  <View style={style.container}>
    {children}
  </View>

export default Container
