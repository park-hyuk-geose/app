import React from "react"
import { ScrollView, SafeAreaView} from "react-native"
import ClassListView from "../ClassListView/ClassListView"
import SchoolBabView from "../SchoolBabView/SchoolBabView"
import PostView from "../PostView/PostView"
import ClassNavigationView from "../ClassNavigation/ClassNavigationView"
import 똥 from "../../assets/박똥.png"
import cat from "../../assets/cat.jpg"
import cat1 from "../../assets/cat1.jpg"

const HomeView = () =>
  // <SafeAreaView>
  //   <ClassListView />
  //   <SchoolBabView />
  // </SafeAreaView>
  <ScrollView>
    <ClassNavigationView />
    <PostView userName="까미" img={cat} text="하이"  />
    <PostView userImg={똥}  userName="박민혁" text="바이" />
  </ScrollView>

export default HomeView
