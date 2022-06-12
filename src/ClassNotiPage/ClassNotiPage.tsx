import {faFilePen} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {useNavigation} from "@react-navigation/native";
import {Pressable} from "react-native";
import {SafeAreaView} from "react-native";
import ClassNotiView from "../ClassNotiView/ClassNotiView";
import style from '../PostsPage/PostsPage.style'

const ClassNotiPage = () => {
  const navigation = useNavigation<any>()
  const onPress = (label: string) => () =>
    navigation.push(label)

  return (
  <SafeAreaView style={style.body}>
    <ClassNotiView userName="양윤직" tag="담임공지" text="AAAA"  />
    <ClassNotiView  userName="이은심" tag="학교공지" text="BBBBB" />

    <Pressable style={style.floatbtn} onPress={onPress('createpost')}>
      <FontAwesomeIcon size={30} color="#333" icon={faFilePen}/>
    </Pressable>
  </SafeAreaView>
  )
}

export default ClassNotiPage 
