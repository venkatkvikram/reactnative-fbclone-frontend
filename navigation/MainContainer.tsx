// import * as React from 'react';
// import { Text, View } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-ionicons';

// //screens
// import HomeScreen from './screens/HomeScreen';
// import ChatScreen from './screens/ChatScreen';
// import SettingsScreen from './screens/SettingsScreen';
// import TimeLineScreen from './screens/TimeLineScreen';

// //ScreenNames
// const homeName ='Home'
// const detailsName ='Details'
// const settingsName ='Settings'
// const timeLineName ='TimeLine'

// const Tab =  createBottomTabNavigator();

// export default function MainContainer() {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator>
//                 initialRouteName={homeName}
//                 screenOptions={({route}) => ({
//                     tabBarIcon: ({focused, color, size}) => {
//                         let iconName;
//                         let rn = route.name;

//                         if(rn === homeName) {
//                             iconName = focused ? 'home' : 'home-outline'
//                         } else if (rn === detailsName) {
//                             iconName = focused ? 'list' : 'list-outline'
//                         }
//                         else if (rn === settingsName) {
//                             iconName = focused ? 'home' : 'home-outline'
//                         }
//                         else if (rn === timeLineName) {
//                             iconName = focused ? 'list' : 'list-outline'
//                         }
                        
//                     }
//                 }) }
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// }