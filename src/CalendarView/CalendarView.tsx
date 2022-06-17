import {ScrollView, Text, View} from "react-native"
import Container from "../Container/Container"
import Link from "../Link/Link"

import style from './CalendarView.style'

const CalendarView = () =>
  <Container>
    <Text>오늘 일정</Text>
      <ScrollView horizontal style={style.container}>
       <View style={style.items}>
        <View style={style.labels}>
        <Text>17일 (금)</Text>
        </View>
        <Text>
        문화앱 프로젝트 최종
        </Text>
      </View>
         <View style={style.items}>
        <View style={style.labels}>
        <Text>18일 (토)</Text>
        </View>
        <Text>
        등록된 일정이 없습니다
        </Text>
      </View>
       <View style={style.items}>
        <View style={style.labels}>
        <Text>19일 (일)</Text>
        </View>
        <Text>
        등록된 일정이 없습니다.
        </Text>
      </View>
   </ScrollView>
  </Container>

export default CalendarView
