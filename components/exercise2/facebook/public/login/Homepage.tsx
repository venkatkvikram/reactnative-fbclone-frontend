// import { background } from "native-base/lib/typescript/theme/styled-system";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {setAuthToken} from '../../utils/auth-utils';
import {useAuthContext} from '../context/auth-context';
import Demo from '../Demo';
import Login from './LoadingScreen';

// import { StyleSheet, View } from "react-native";

function SignUp() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Top = createMaterialTopTabNavigator();

function Homepage({navigation}: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {changeUser} = useAuthContext();
  const backtoRegister = () => {
    navigation.navigate('Register');
  };

  const submit = async () => {
    if (email !== '' && password !== '') {
      try {
        const res = await fetch('http://10.0.2.2:7001/auth/login', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({email, password}),
        });
        const {success, message, user} = await res.json();
        console.log(success);
        if (success) {
          await setAuthToken(user.id);
          changeUser(user);
          return navigation.navigate('TimeLine');
        }
        Alert.alert(message);
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert('Please enter valid email or password');
    }
  };

  return (
    <View style={{backgroundColor: 'aliceblue', flex: 1}}>
      <View style={styles.loginContainer}>
        <Image
          style={styles.imageSize}
          source={require('../../logo/facebook.png')}
        />
        <Text style={styles.loginHeading}>Login or Sign Up today</Text>
        <View style={styles.container}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email ID"
              placeholderTextColor="#003f5c"
              onChangeText={email => setEmail(email)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password."
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={password => setPassword(password)}
            />
          </View>
          <TouchableOpacity onPress={() => backtoRegister()}>
            <Text style={styles.forgot_button}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} onPress={() => submit()}>
            <Text style={{color: 'white'}}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: 'aliceblue',
    // display: 'flex',
    flex: 1,
  },
  imageSize: {
    width: '60%',
    height: '10%',
    padding: 10,
  },
  loginHeading: {
    color: 'white',
    backgroundColor: '#1877f2',
    display: 'flex',
    justifyContent: 'center',
    fontSize: 30,
    padding: 20,
  },
  //login demo styles
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: 'aliceblue',
    borderRadius: 10,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 9,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: 'red',
  },
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#1877f2',
  },
});

export default Homepage;
