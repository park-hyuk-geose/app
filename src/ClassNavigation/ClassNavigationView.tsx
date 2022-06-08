import {useNavigation} from "@react-navigation/native"
import {Pressable, Text, View} from "react-native"
// import Hr from "react-native-hr"
// import Hr from "react-native-hr-component";
import RightArrow from './assets/RightArrow.svg'

import style from './ClassNavigation.style'

interface Props {
  to: string
  label: string
}

const Hr = () => {
  return(
    <View
      style={{
        height: '100%',
        width: 1,
        backgroundColor: '#b0b0b0',
      }}
    />
  )
}

const ClassNavigationView = () => {
  const navigation = useNavigation<any>()
  // const onPress = () =>
  //   navigation.push(to)

  return (
    <View style={style.outer}>
      <Pressable> 
        <View style={style.inner}>
          <Text style={true ? style.innerText : style.innerTextFalse}>게시판</Text>
        </View>
      </Pressable>
      {/* <Hr /> */}
      <Pressable>
        <View style={style.inner}>
          <Text style={false ? style.innerText : style.innerTextFalse}>알림장</Text>
        </View>
      </Pressable>
      {/* <Hr /> */}
      <Pressable> 
        <View style={style.inner}>
          <Text style={false ? style.innerText : style.innerTextFalse}>과제</Text>
        </View>
      </Pressable>
      {/* <Hr /> */}
      <Pressable>
        <View style={style.inner}>
          <Text style={false ? style.innerText : style.innerTextFalse}>캘린더</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default ClassNavigationView
