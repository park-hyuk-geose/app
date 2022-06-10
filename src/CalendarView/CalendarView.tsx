import {ScrollView, Text, View} from "react-native"
import Container from "../Container/Container"
import Link from "../Link/Link"

import style from './CalendarView.style'

const CalendarView = () =>
  <Container>
    <Link to="Calendars" label="오늘 일정"/>
      <ScrollView horizontal style={style.container}>
       <View style={style.items}>
        <View style={style.labels}>
        <Text>24일 (월)</Text>
        </View>
        <Text>
        등록된 일정이 없어요
        </Text>
      </View>
         <View style={style.items}>
        <View style={style.labels}>
        <Text>24일 (월)</Text>
        </View>
        <Text>
        등록된 일정이 없어요
        </Text>
      </View>
       <View style={style.items}>
        <View style={style.labels}>
        <Text>24일 (월)</Text>
        </View>
        <Text>
        등록된 일정이 없어요
        </Text>
      </View>
   </ScrollView>
  </Container>

export default CalendarView
