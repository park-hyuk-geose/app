import React from "react"
import { SafeAreaView} from "react-native"
import CalenderView from "../CalendarView/CalendarView"
import ClassListView from "../ClassListView/ClassListView"
import SchoolBabView from "../SchoolBabView/SchoolBabView"

const HomeView = () =>
  <SafeAreaView>
    <DetaliedCalendar />
    <DetailedList />
  </SafeAreaView>

export default HomeView
