import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StyleSheet, View } from "react-native";
import ClassPage from "./src/ClassPage/ClassPage"
import HomeView from "./src/HomeView/HomeView"

const Stack = createNativeStackNavigator()

const App = () =>
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
      </Stack.Navigator>
  </NavigationContainer>
    </View>

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1
  },
})

export default App
