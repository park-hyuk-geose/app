import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ClassPage from "./src/ClassPage/ClassPage"
import HomeView from "./src/HomeView/HomeView"

const Stack = createNativeStackNavigator()

const App = () =>
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{ headerTitle: "우리학교" }}
        component={HomeView} />
      <Stack.Screen
        name="Class"
        options={{ headerTitle: "경소고 소프트웨어개발과 1반" }}
        component={ClassPage} />
    </Stack.Navigator>
  </NavigationContainer>

export default App
