import { useNavigation } from "@react-navigation/native";
import {Image, Pressable, Text, View} from "react-native";
import SchoolLogo from '../../assets/schoologo.png'

import style from './ClassListItem.style'

const ClassListItem = () => {
  const navigation = useNavigation<any>()
  const onPress = () =>
    navigation.push("Class")

  return (
    <View style={{ marginHorizontal: 10 }}> 
      <Pressable onPress={onPress}>
        <View style={style.view}>
          <View style={style.img}>
            <Image source={SchoolLogo} style={style.image} />
          </View>
          <Text style={style.text}>경소고 소프트웨어개발과 1반</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default ClassListItem
