import { useNavigation } from "@react-navigation/core"
import {Image, Pressable, Text, View} from "react-native"
import Container from "../Container/Container"
import userDefaultImg from '../../assets/user.png'
import style from './MyPage.style'
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import {faAngleRight, faAnglesRight, faBookmark, faUser} from "@fortawesome/free-solid-svg-icons"

const MyPage = () => {
  const navigation = useNavigation<any>()
  const onPress = (label: string) => () =>
    navigation.push(label)

  return (
    <View>
      <Container>
          <View style={style.content}>
            <Image source={userDefaultImg} style={style.userimg} />
            <Text style={style.label}>박민혁</Text>
          </View>
      </Container>
      <Container>
        <Pressable style={style.pressable} onPress={onPress('account')}>
          <View style={style.content}>
            <FontAwesomeIcon size={20} icon={faUser}/>
            <Text style={style.label}>계정</Text>
          </View>
          <FontAwesomeIcon icon={faAngleRight}/>
        </Pressable>
      </Container>
      <Container>
        <Pressable style={style.pressable} onPress={onPress('archive')}>
          <View style={style.content}>
            <FontAwesomeIcon size={20} icon={faBookmark}/>
            <Text style={style.label}>보관</Text>
          </View>
          <FontAwesomeIcon icon={faAngleRight}/>
        </Pressable>
      </Container>
    </View>
  ) 
}

export default MyPage
