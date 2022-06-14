import React from "react"
import { Image, Pressable, SafeAreaView, ScrollView, Text, View} from "react-native"
import ClassListView from "../ClassListView/ClassListView"
import SchoolBabView from "../SchoolBabView/SchoolBabView"
import CalendarView from "../CalendarView/CalendarView"
import userDefaultImg from "../../assets/user.png"
import Link from "../Link/Link"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import {useNavigation} from "@react-navigation/native"
import style from "./HomeView.style"

const HomeView = () => {
  const navigation = useNavigation<any>()
  const onPress = () =>
    navigation.push("mypage")

  return (
  <SafeAreaView>
    <View style={style.title}>
      <Text style={{ fontSize: 20 }}>우리 학교</Text>
      <Pressable onPress={onPress}>
        <Image 
          style={style.userimg}
          source={userDefaultImg} />
      </Pressable>
    </View>
    <ScrollView>
      <View style={style.main}>
        <ClassListView />
        <CalendarView />
        <SchoolBabView />
      </View>
    </ScrollView>
  </SafeAreaView>
  // <ScrollView>
  //   <ClassNavigationView />
  //   <PostView userName="까미" img={cat} text="하이"  />
  //   <PostView userImg={똥}  userName="박민혁" text="바이" />
  // </ScrollView>
  )
}

export default HomeView
