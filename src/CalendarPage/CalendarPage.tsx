import { useState } from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Text, View} from "react-native"
import Container from "../Container/Container"
import Link from "../Link/Link"

const CalendarView = () => {
 var [date, setDate] = useState('');
  return(
    <Container>
      <Calendar
        onDayPress={day => {
          setDate(day.dateString);
        }}
        markedDates={{ [date] : {selected: true, selectedColor: 'blue'},}}
        
      />
    </Container>
  )
}

  

export default CalendarView
