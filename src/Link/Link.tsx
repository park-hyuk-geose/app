import {useNavigation} from "@react-navigation/native"
import {Pressable, Text, View} from "react-native"
import RightArrow from './assets/RightArrow.svg'

import style from './Link.style'

interface Props {
  to: string
  label: string
}

const Link = ({ to, label }: Props) => {
  const navigation = useNavigation<any>()
  const onPress = () =>
    navigation.push(to)

  return (
    <Pressable onPress={onPress}> 
      <View style={style.outer}>
        <Text>{label} </Text>
        <RightArrow />
      </View>
    </Pressable>
  )
}

export default Link
