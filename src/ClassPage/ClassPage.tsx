import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ClassNotiPage from '../ClassNotiPage/ClassNotiPage';
import ClassNotiView from '../ClassNotiView/ClassNotiView';
import HomeworkPage from '../HomeworkPage/HomeworkPage';
import PostsPage from '../PostsPage/PostsPage';
import CalendarPage from '../CalendarPage/CalendarPage';

const Tab = createMaterialTopTabNavigator();

const ClassPage = () =>
    <Tab.Navigator initialRouteName="Posts" screenOptions={{ tabBarIndicatorStyle: { backgroundColor: '#4F46E5' } }}>
      <Tab.Screen
        name="Posts"
        component={PostsPage}
        options={{ title: "게시판" }}/>
      <Tab.Screen
        name="a"
        component={ClassNotiPage}
        options={{ title: "알림장" }}/>
        <Tab.Screen
        name="b"
        component={HomeworkPage}
        options={{ title: "과제" }}/>
      <Tab.Screen
        name="c"
        component={CalendarPage}
        options={{ title: "캘린더" }}/>
  </Tab.Navigator>

export default ClassPage
