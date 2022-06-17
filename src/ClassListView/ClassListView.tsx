import {useNavigation} from "@react-navigation/native"
import {Pressable, ScrollView, View, Text} from "react-native"
import ClassListItem from "../ClassListItem/ClassListItem"
import Container from "../Container/Container"
import Link from "../Link/Link"
import style from "./ClassListView.style"

const ClassListView = () => 
    <Container style={style.homecontainer}>
      <Text>내 학급</Text>
      <ScrollView horizontal style={style.scroll}>
        <ClassListItem />
        <ClassListItem />
        <ClassListItem />
        <ClassListItem />
        <ClassListItem />
        <ClassListItem />
        <ClassListItem />
        <ClassListItem />
        <ClassListItem />
        <ClassListItem />
        <ClassListItem />
        <ClassListItem />
      </ScrollView>
    </Container>

export default ClassListView
