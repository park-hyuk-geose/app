import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AccountPage from "./src/AccountPage/AccoutPage"
import ArchivePage from "./src/ArchivePage/ArchivePage"
import ClassPage from "./src/ClassPage/ClassPage"
import HomeView from "./src/HomeView/HomeView"
import MyPage from "./src/MyPage/MyPage"

const Stack = createNativeStackNavigator()

const App = () =>
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
    </Stack.Navigator>
  </NavigationContainer>

export default App
