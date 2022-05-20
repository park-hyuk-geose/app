import React from "react"
import { SafeAreaView} from "react-native"
import ClassListView from "../ClassListView/ClassListView"
import SchoolBabView from "../SchoolBabView/SchoolBabView"
import PostView from "../PostView/PostView"

const HomeView = () =>
  <SafeAreaView>
    {/* <ClassListView />
    <SchoolBabView /> */}
    <PostView />
  </SafeAreaView>

export default HomeView
