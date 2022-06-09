import {useNavigation} from "@react-navigation/native"
import {Pressable} from "react-native"
import ClassListItem from "../ClassListItem/ClassListItem"
import Container from "../Container/Container"
import Link from "../Link/Link"

const ClassListView = () => {
  const navigation = useNavigation<any>()
  const onPress = () =>
    navigation.push("Class")

  return (
    <Container>
      <Link to="MyClasses" label="내 학급"/>
      <Pressable onPress={onPress}>
        <ClassListItem />
      </Pressable>
    </Container>
  )
}

export default ClassListView
