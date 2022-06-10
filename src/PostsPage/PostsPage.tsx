import {SafeAreaView} from "react-native";
import PostView from "../PostView/PostView";
import 똥 from "../../assets/박똥.png"
import cat from "../../assets/cat.jpg"

const PostsPage = () =>
  <SafeAreaView>
    <PostView userName="까미" img={cat} text="하이"  />
    <PostView userImg={똥}  userName="박민혁" text="바이" />
  </SafeAreaView>

export default PostsPage
