import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import SafeNav from './SafeNav';
// import Stack1 from './app/stack/stack1/Stack1';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CardComponent from './CardComponent';


const Top = createMaterialTopTabNavigator();
// const stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();


function HomeScreen() {

  return (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //       <Text>Home Screen</Text>
    //       <SafeNav/>
    // </View>
    <BottomTab.Navigator>
      <BottomTab.Screen name="News" component={CardComponent} />
      <BottomTab.Screen name='sub nav 2' component={SafeNav} />
    </BottomTab.Navigator>
  );
}

function InboxScreen() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Direct Messages" component={SafeNav} />
      <BottomTab.Screen name='Message Requests' component={SafeNav} />
    </BottomTab.Navigator>
  );
}

function SettingsScreen() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Edit Profile" component={SafeNav} />
      <BottomTab.Screen name='Privacy Settings' component={SafeNav} />
    </BottomTab.Navigator>
    
  );
}



export default function TopNav() {
  return (
    <NavigationContainer>
      <Top.Navigator>
        <Top.Screen name="Profile" component={HomeScreen} />
        <Top.Screen name="Inbox" component={InboxScreen} />
        <Top.Screen name="Settings" component={SettingsScreen} />
      </Top.Navigator>
    </NavigationContainer>
  );
}
