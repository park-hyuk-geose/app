import React from "react"
import { SafeAreaView} from "react-native"
import ClassListView from "../ClassListView/ClassListView"
import SchoolBabView from "../SchoolBabView/SchoolBabView"

const HomeView = () =>
  <SafeAreaView>
    <ClassListView />
    <SchoolBabView />
  </SafeAreaView>

export default HomeView
