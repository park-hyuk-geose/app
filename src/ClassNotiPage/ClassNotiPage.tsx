import {SafeAreaView} from "react-native";
import 똥 from "../../assets/박똥.png"
import cat from "../../assets/cat.jpg"
import ClassNotiView from "../ClassNotiView/ClassNotiView";

const ClassNotiPage = () =>
  <SafeAreaView>
    <ClassNotiView userName="양윤직" tag="담임공지" img={cat} text="하이"  />
    <ClassNotiView  userName="이은심" tag="학교공지" text="바이" />
  </SafeAreaView>

export default ClassNotiPage 
