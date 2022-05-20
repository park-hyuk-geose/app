import { Image, View, Text } from "react-native"
import Container from "../Container/Container"
import 똥 from "../../assets/박똥.png"
import style from './PostView.style'

const PostView = () =>
  <View style={style.post}>
    <Container>

      <View style={style.userinfo}>
        <Image 
          style={style.userimg}
          source={똥} />
        <Text style={style.username}>박민혁</Text>
      </View>
      <Text style={style.usertext}>나는 바보</Text>
      <View style={style.useract}>
        <View>
          <Text>좋아요</Text>
        </View>
        <View>
          <Text>댓글</Text>
        </View>
        <View>
          <Text>보관</Text>
        </View>
      </View>
    </Container>
  </View>
export default PostView

