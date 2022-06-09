import React from "react"
import { ScrollView, SafeAreaView} from "react-native"
import ClassListView from "../ClassListView/ClassListView"
import SchoolBabView from "../SchoolBabView/SchoolBabView"
import PostView from "../PostView/PostView"
import ClassNavigationView from "../ClassNavigation/ClassNavigationView"
import 똥 from "../../assets/박똥.png"
import cat from "../../assets/cat.jpg"
import cat1 from "../../assets/cat1.jpg"
import CalendarView from "../CalendarView/CalendarView"
import {NavigationProp} from "@react-navigation/native"

const HomeView = () =>
  <SafeAreaView>
     <ClassListView />
     <CalendarView />
     <SchoolBabView />
   </SafeAreaView>

export default HomeView
