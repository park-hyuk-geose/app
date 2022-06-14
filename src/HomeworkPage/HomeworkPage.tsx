import {faFilePen} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {useNavigation} from "@react-navigation/native";
import {Pressable, SafeAreaView} from "react-native";
import HomeworkView from "../HomeworkView/HomeworkView";
import style from '../PostsPage/PostsPage.style'

const HomeworkPage = () => {
  const navigation = useNavigation<any>()
  const onPress = (label: string) => () =>
    navigation.push(label)


  return (
  <SafeAreaView style={style.body}>
    <HomeworkView userName="이진수" text="하이" homeworks={[
      '모마 연습해오기',
      '시그마가 뭐에요?'
    ]}  />

    <Pressable style={style.floatbtn} onPress={onPress('createpost')}>
      <FontAwesomeIcon size={30} color="#333" icon={faFilePen}/>
    </Pressable>
  </SafeAreaView>


  )
}
export default HomeworkPage
