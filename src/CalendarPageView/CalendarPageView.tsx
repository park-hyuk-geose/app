import { useState } from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Text, View} from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Container from "../Container/Container"
import Link from "../Link/Link"
import moment from 'moment'

const data = [
  {
    date: "2022-06-14",
    homeworks: [
      '모마 연습해오기',
      '시그마가 뭐에요?'
    ]
  },
  {
    date: "2022-06-15",
    homeworks: [
      '던질까',
      '말까'
    ]
  },
  {
    date: "2022-06-10",
    homeworks: [
      '참나',
      '귀찬다'
    ]
  },
  {
    date: "2022-06-01",
    homeworks: [
      '바보',
      '박혁거세'
    ]
  },
];

const CalendarPageView = () => {
  var [date, setDate] = useState<string | null>(null);

  var before3days = moment(date || new Date()).subtract(3, 'days')

 return(
    <View>
      <Calendar
        onDayPress={day => {
          setDate(day.dateString);
        }}
        markedDates={{ [date!] : {selected: true, selectedColor: 'blue'},}}
        
      />
      <Container>
        {new Array(7).fill(0).map((_, i) => (
          <View>
            <Text>{moment(before3days).add(i, 'days').format('YYYY-MM-DD')}</Text>
            {data.filter((v) => v.date === moment(before3days).add(i, 'days').format('YYYY-MM-DD')).map((v) => (
              <View>
                {v.homeworks.map((v) => (
                  <BouncyCheckbox fillColor="#4F46E5" style={{ marginVertical: 10 }} text={v} />
                ))}
                </View>
            ))}
          </View>
        ))}

        {/* {
          data.map((i) => (
            <View>
              {i.date.split('-')[0] === date.split('-')[0] && i.date.split('-')[1] === date.split('-')[1] && parseInt(i.date.split('-')[2]) >= (parseInt(date.split('-')[2]) - 3) && parseInt(i.date.split('-')[2]) <= (parseInt(date.split('-')[2]) + 3) && (
                <View>
                  <Text>{i.date}</Text>
                  {i.homeworks ? i.homeworks.map((v) => (
                  <BouncyCheckbox fillColor="#4F46E5" style={{ marginVertical: 10 }} text={v} />
                )): null}
                </View>

              )}
            </View>
          ))
        } */}

      </Container>
    </View>
  )
}

  

export default CalendarPageView
