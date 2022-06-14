import {Image, SafeAreaView, Text, TextInput, View} from "react-native";
import Container from "../Container/Container";
import style from '../MyPage/MyPage.style'

import userDefaultImg from '../../assets/user.png'
const CreatePostView = () =>
  <SafeAreaView>
      <Container>
          <View style={style.content}>
            <Image source={userDefaultImg} style={style.userimg} />
            <Text style={style.label}>박민혁</Text>
          </View>
      </Container>
      <Container>
        <TextInput textAlignVertical="top" multiline numberOfLines={30} placeholder="입력하셈 ㄱㄱ"/>
      </Container>
  </SafeAreaView>

export default CreatePostView
