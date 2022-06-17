import CreatePostView from "../CreatePostView/CreatePostView";
import {Image, SafeAreaView, Text, TextInput, View} from "react-native";
import Container from "../Container/Container";
import style from '../MyPage/MyPage.style'
import userDefaultImg from '../../assets/user.png'
import PostView from "../PostView/PostView";
// import { useNavigation } from "@react-navigation/native";

interface Props {
  userImg: string;
  userName: string;
  img: string;
  teacher: boolean;
  text: string;
  tag: string;
  homeworks: string[];
  chat: string[];
};

const PostOverView = ({route}: any) => {
  const {userImg, userName, img, text, tag, teacher, homeworks, chat} = route.params;
  return(
    <SafeAreaView>
      {/* <Text>{JSON.stringify(</Text> */}
      <PostView userImg={userImg} userName={userName} img={img} text={text} tag={tag} teacher={teacher} homeworks={homeworks} chat={chat} chatting={true} />
    </SafeAreaView>
  )
}

PostOverView.defaultProps = {
  userImg: userDefaultImg,
  img: false,
  text: null,
  tag: null,
  teacher: false,
  homeworks: null,
  chat: null,
}

export default PostOverView
