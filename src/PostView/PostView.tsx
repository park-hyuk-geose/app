import { Image, View, Text, Pressable, TextInput, ScrollView, TouchableOpacity } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox";
import style from './PostView.style'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faThumbsUp, faComment, faBookmark, faCommentAlt } from "@fortawesome/free-solid-svg-icons"
import userDefaultImg from "../../assets/user.png"
import { useNavigation } from "@react-navigation/native";

type Array = {
  user: string,
  text: string,
  img: string,
};

interface Props {
  userImg: string;
  userName: string;
  img: string;
  teacher: boolean;
  text: string;
  tag: string;
  homeworks: string[];
  chat: Array[];
  chatting: boolean;
};

const PostView = ({ userImg, userName, img, text, tag, teacher, homeworks, chat, chatting }: Props) => {
  const navigation = useNavigation<any>()
  const onPress = () => {
    navigation.push('overview', {userImg: userImg, userName: userName, img: img, text: text, tag: tag, teacher: teacher, homeworks: homeworks, chat:chat});
  }

  return (
    <ScrollView style={chatting?style.chattingPost:style.chattingPostNull}>
      <View style={style.post} >
        <View>
          <View style={style.userinfo}>
            <View style={style.userflex}>
            <Image 
              style={style.userimg}
              source={userImg} />
            <Text style={style.username}>{userName}{ teacher ? " 선생님" : null}</Text>
          </View>
          {tag?<Text>#{tag}</Text>:null}
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
            {!chatting?
            <Pressable onPress={onPress}>
              <View style={style.acticon}>
                <FontAwesomeIcon icon={faCommentAlt}/>
                <Text> 댓글</Text>
              </View>
            </Pressable>:null}
            <View style={style.acticon}>
              <FontAwesomeIcon icon={faBookmark}/>
              <Text> 보관</Text>
            </View>
          </View>
          
        </View>
      </View>
      
      {chatting&&chat? 
        <ScrollView style={style.chat}>
          <View>
            {
              chat.map((v) => (
                <View style={style.chatView}>
                  <Image 
                    style={style.chatImg}
                    source={v.img} />
                  <Text style={style.chatText}> {v.user} </Text>
                  <Text style={style.chatText}> {v.text}</Text>
                </View>
              ))
            }
          </View>
          <View style={style.input}>
            <Image 
              style={style.chatImg}
              source={userImg} />
            <View style={style.chatInputView}>
              <TextInput style={style.chatInput} placeholder="댓글달기..."/>
              <TouchableOpacity
                style={style.submitButton}>
                <Text style = {style.submitButtonText}> 게시 </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      :null}
      
    </ScrollView>
  )

}

PostView.defaultProps = {
  userImg: userDefaultImg,
  img: false,
  text: null,
  tag: null,
  teacher: false,
  homeworks: null,
  chat: null,
  chatting: false,
}

export default PostView

