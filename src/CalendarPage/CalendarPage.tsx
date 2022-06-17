import { useState } from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Text, View, ScrollView} from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Container from "../Container/Container"
import Link from "../Link/Link"
import CalendarPageView from '../CalendarPageView/CalendarPageView';

const CalendarPage = () => {
  return(
    <ScrollView>
      <CalendarPageView />
    </ScrollView>
  )
}

  

export default CalendarPage
