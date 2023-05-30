import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaceBookTimeline from './facebook/FaceBookTimeline';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Homepage from './facebook/public/login/Homepage';
import {removeAuthToken} from './facebook/utils/auth-utils';
import {useAuthContext} from './facebook/public/context/auth-context';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen({navigation}: any) {
  const {user} = useAuthContext();
  const logout = () => {
    removeAuthToken();
    navigation.navigate('LoginHome');
  };

  const deleteProfile = async () => {
    console.log(user);
    if (!user) {
      return;
    }
    try {
      removeAuthToken();
      console.log(user.id);
      const res = await fetch(`http://10.0.2.2:7001/users/${user.id}`, {
        method: 'DELETE',
      });
      const {success, message} = await res.json();
      if (success) {
        navigation.navigate('LoginHome');
      } else {
        console.log(message);
        Alert.alert(message);
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity style={styles.logoutBtn} onPress={() => logout()}>
        <Text style={{color: 'white'}}>LOGOUT</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => deleteProfile()}>
        <Text style={{color: 'white'}}>DELETE PROFILE</Text>
      </TouchableOpacity>
    </View>
  );
}

function ChatScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Inbox</Text>
    </View>
  );
}

function TimeLineScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Inbox</Text>
    </View>
  );
}
const Top = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Top.Navigator>
      <Top.Screen
        name="Home"
        component={FaceBookTimeline}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={25} color={color} />
          ),
        }}
      />
      <Top.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color, size}) => (
            <Icon name="chat" size={25} color={color} />
          ),
        }}
      />
      <Top.Screen
        name=" FaceBook TimeLine"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Time Line',
          tabBarIcon: ({color, size}) => (
            <Icon name="dashboard" size={25} color={color} />
          ),
        }}
      />
      <Top.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <Icon name="settings" size={25} color={color} />
          ),
        }}
      />
    </Top.Navigator>
  );
}

const styles = StyleSheet.create({
  logoutBtn: {
    width: '60%',
    borderRadius: 0,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#1877f2',
  },
});
export default function TopNavBar() {
  return (
    // <NavigationContainer >
    <MyTabs />
  );
}
