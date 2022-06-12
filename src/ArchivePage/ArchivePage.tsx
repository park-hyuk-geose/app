import {SafeAreaView} from "react-native";
import PostView from '../PostView/PostView'
import cat from "../../assets/cat.jpg"

const ArchivePage = () =>
  <SafeAreaView>
    <PostView userName="까미" img={cat} text="하이"  />
  </SafeAreaView>

export default ArchivePage
