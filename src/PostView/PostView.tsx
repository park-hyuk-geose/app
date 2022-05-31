import { Image, View, Text } from "react-native"
import Container from "../Container/Container"
import 똥 from "../../assets/박똥.png"
import style from './PostView.style'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faThumbsUp, faComment, faBookmark, faCommentAlt } from "@fortawesome/free-solid-svg-icons"

const PostView = () =>
  <View style={style.post}>
    <View>
      <View style={style.userinfo}>
        <Image 
          style={style.userimg}
          source={똥} />
        <Text style={style.username}>박민혁</Text>
      </View>
      <Text style={style.text}>나는 바보</Text>
      <View style={style.imgview}>
        <Image style={style.img} source={똥} />
      </View>
      <View style={style.useract}>
        <View style={style.acticon}>
          <FontAwesomeIcon icon={faThumbsUp}/>
          <Text> 좋아요</Text>
        </View>
        <View style={style.acticon}>
          <FontAwesomeIcon icon={faCommentAlt}/>
          <Text> 댓글</Text>
        </View>
        <View style={style.acticon}>
          <FontAwesomeIcon icon={faBookmark}/>
          <Text> 보관</Text>
        </View>
      </View>
    </View>
  </View>
export default PostView

