import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
<<<<<<< HEAD
import { StyleSheet, View } from "react-native";
=======
import AccountPage from "./src/AccountPage/AccoutPage"
import ArchivePage from "./src/ArchivePage/ArchivePage"
>>>>>>> 8c3863bb612123c4910185064f38027f4453fc6f
import ClassPage from "./src/ClassPage/ClassPage"
import CreatePostView from "./src/CreatePostView/CreatePostView"
import HomeView from "./src/HomeView/HomeView"
import MyPage from "./src/MyPage/MyPage"

const Stack = createNativeStackNavigator()

const App = () =>
    <View style={styles.container}>
  <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeView} />
        <Stack.Screen
          name="Class"
          options={{ headerTitle: "경소고 소프트웨어개발과 1반" }}
          component={ClassPage} />
      </Stack.Navigator>
=======
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
>>>>>>> 8c3863bb612123c4910185064f38027f4453fc6f
  </NavigationContainer>
    </View>

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1
  },
})

export default App
