import {faFilePen} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {useNavigation} from "@react-navigation/native";
import {Pressable} from "react-native";
import {SafeAreaView} from "react-native";
import PostView from "../PostView/PostView";
import style from '../PostsPage/PostsPage.style'

const ClassNotiPage = () => {
  const navigation = useNavigation<any>()
  const onPress = (label: string) => () =>
    navigation.push(label)

  return (
  <SafeAreaView style={style.body}>
    <PostView userName="양윤직" tag="담임공지" text="AAAA" teacher={true}  />
    <PostView  userName="이은심" tag="학교공지" text="BBBBB" teacher={true} />

    <Pressable style={style.floatbtn} onPress={onPress('createpost')}>
      <FontAwesomeIcon size={30} color="#333" icon={faFilePen}/>
    </Pressable>
  </SafeAreaView>
  )
}

export default ClassNotiPage 
