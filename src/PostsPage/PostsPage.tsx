import {Pressable, SafeAreaView} from "react-native";
import PostView from "../PostView/PostView";
import 똥 from "../../assets/박똥.png"
import cat from "../../assets/cat.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faFilePen} from "@fortawesome/free-solid-svg-icons";
import style from './PostsPage.style'
import {useNavigation} from "@react-navigation/native";

const PostsPage = () => {
  const navigation = useNavigation<any>()
  const onPress = (label: string) => () =>
    navigation.push(label)

  return (
    <SafeAreaView style={style.body}>
      <PostView userName="까미" img={cat} text="하이"  />
      <PostView userImg={똥}  userName="박민혁" text="바이" />
      <Pressable style={style.floatbtn} onPress={onPress('createpost')}>
        <FontAwesomeIcon size={30} color="#333" icon={faFilePen}/>
      </Pressable>
    </SafeAreaView>
  )
}
  export default PostsPage
