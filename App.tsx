import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, StyleSheet } from "react-native"
import AccountPage from "./src/AccountPage/AccoutPage"
import ArchivePage from "./src/ArchivePage/ArchivePage"
import ClassPage from "./src/ClassPage/ClassPage"
import CreatePostView from "./src/CreatePostView/CreatePostView"
import HomeView from "./src/HomeView/HomeView"
import MyPage from "./src/MyPage/MyPage"

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <View style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={HomeView} />
          <Stack.Screen
            name="Class"
            options={{ headerTitle: "경소고 소프트웨어개발과 1반" }}
            component={ClassPage} />
          <Stack.Screen
            name="mypage"
            options={{ headerTitle: '마이페이지' }}
            component={MyPage} />
          <Stack.Screen
            name="account"
            options={{ headerTitle: '계정' }}
            component={AccountPage} />
          <Stack.Screen
            name="archive"
            options={{ headerTitle: '보관' }}
            component={ArchivePage} />
          <Stack.Screen
            name="createpost"
            options={{ headerTitle: '글쓰기' }}
            component={CreatePostView} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1
  },
})

export default App
