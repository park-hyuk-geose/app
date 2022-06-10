import {SafeAreaView} from "react-native";
import HomeworkView from "../HomeworkView/HomeworkView";

const HomeworkPage = () =>
  <SafeAreaView>
    <HomeworkView userName="이진수" text="하이" homeworks={[
      '모마 연습해오기',
      '시그마가 뭐에요?'
    ]}  />
  </SafeAreaView>

export default HomeworkPage
