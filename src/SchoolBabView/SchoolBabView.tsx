import {Text, View} from "react-native"
import Container from "../Container/Container"
import Link from "../Link/Link"

import style from './SchoolBabView.style'

const SchoolBabView = () =>
  <Container>
    <Link to="SchooBobs" label="오늘 밥"/>
      <View style={style.container}>
       <View style={style.items}>
        <View style={style.labels}>
          <Text style={style.label}>아침</Text>
          <Text>730 KCal</Text>
        </View>
        <Text>
{`*후랑크소시지볶음밥 (1.2.5.6.10.13.15.)
초코머핀 (1.2.5.6.13.)
달걀파국 (1.13.)
배추김치 (9.13.)
당근&사과(아연)주스 (12.)`}
        </Text>
        <View style={style.date}>
          <Text>
            1월 30일
          </Text>
        </View>
      </View>
       <View style={style.items}>
        <View style={style.labels}>
          <Text style={style.label}>점심</Text>
          <Text>990 KCal</Text>
        </View>
        <Text>
{`유부초밥(점보)1 (1.2.5.6.10.13.15.16.)
매운어묵국 (1.5.6.13.16.)
총각김치 (9.13.)
에그드랍샌드위치(소) (1.2.5.6.10.13.)
골드파인애플
마시는샐러드 오렌지 (5.13.)`}
        </Text>
        <View style={style.date}>
          <Text>
            1월 30일
          </Text>
        </View>
      </View>
      <View style={style.items}>
        <View style={style.labels}>
          <Text style={style.label}>저녁</Text>
          <Text>990 KCal</Text>
        </View>
        <Text>
{`유부초밥(점보)1 (1.2.5.6.10.13.15.16.)
매운어묵국 (1.5.6.13.16.)
총각김치 (9.13.)
에그드랍샌드위치(소) (1.2.5.6.10.13.)
골드파인애플
마시는샐러드 오렌지 (5.13.)`}
        </Text>
        <View style={style.date}>
          <Text>
            1월 30일
          </Text>
        </View>
      </View>
    </View>
  </Container>

export default SchoolBabView

