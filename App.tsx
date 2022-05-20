import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeView from "./src/HomeView/HomeView"

const Stack = createNativeStackNavigator()

const App = () =>
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{ headerTitle: "우리학교" }}
        component={HomeView} />
    </Stack.Navigator>
  </NavigationContainer>

export default App
