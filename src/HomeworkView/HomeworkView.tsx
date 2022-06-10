import { Image, View, Text } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox";
import style from './HomeworkView.style'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faThumbsUp, faComment, faBookmark, faCommentAlt } from "@fortawesome/free-solid-svg-icons"
import userDefaultImg from "../../assets/user.png"

interface Props {
  userImg: string;
  userName: string;
  img: string;
  text: string;
  homeworks: string[]
};

const HomeworkView = ({ userImg, homeworks, userName, img, text }: Props) =>
  <View style={style.post}>
    <View>
      <View style={style.userinfo}>
        <Image 
          style={style.userimg}
          source={userImg} />
        <Text style={style.username}>{userName} 선생님</Text>
      </View>
      <Text style={style.text}>{text}</Text>
      {img?
      <View style={style.imgview}>
        <Image style={style.img} source={img} />
      </View>:null}
      {homeworks ? homeworks.map((v) => (
        <BouncyCheckbox fillColor="#4F46E5" style={{ marginVertical: 10 }} text={v} />
      )): null}
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

HomeworkView.defaultProps = {
  userImg: userDefaultImg,
  img: false,
  text: null,
}
export default HomeworkView

