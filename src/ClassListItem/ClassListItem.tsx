import {Image, Text, View} from "react-native";
import SchoolLogo from '../../assets/schoologo.png'

import style from './ClassListItem.style'

const ClassListItem = () =>
  <View style={style.view}>
    <Image source={SchoolLogo} style={style.image} />
    <Text style={style.text}>경소고 소프트웨어개발과 1반</Text>
  </View>

export default ClassListItem
