import { Image, View, Text } from "react-native"
import style from './ClassNotiView.style'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faThumbsUp, faComment, faBookmark, faCommentAlt } from "@fortawesome/free-solid-svg-icons"
import userDefaultImg from "../../assets/user.png"

interface Props {
  userImg: string;
  userName: string;
  img: string;
  text: string;
  tag: string
};

const ClassNotiView = ({ userImg, userName, img, text , tag}: Props) =>
  <View style={style.post}>
    <View>
      <View style={style.userinfo}>
        <View style={style.userflex}>
         <Image 
          style={style.userimg}
          source={userImg} />
        <Text style={style.username}>{userName} 선생님</Text>
       </View>
       <Text>#{tag}</Text>
      </View>
      <Text style={style.text}>{text}</Text>
      {img?
      <View style={style.imgview}>
        <Image style={style.img} source={img} />
      </View>:null}
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

ClassNotiView.defaultProps = {
  userImg: userDefaultImg,
  img: false,
  text: null,
}
export default ClassNotiView

