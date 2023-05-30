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

export const ForgotPassword = () => {
return (
    <View style={{backgroundColor: 'aliceblue', flex: 1}}>
    <View style={styles.loginContainer}>
      <Image
        style={styles.imageSize}
        source={require('../logo/facebook.png')}
      />
      <Text style={styles.loginHeading}>Reset your Password</Text>
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
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Confirm password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Username"
            placeholderTextColor="#003f5c"
            onChangeText={email => setEmail(email)}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot_button}>
            Already have an account? Login here!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => createAccount()}>
          <Text style={{color: 'white'}}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
};

// const styles = StyleSheet.create({
//   logoSize: {
//     width: '60%',
//     height: '10%',
//     padding: 5,
//     marginTop: 0,
//   },
// });

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
  flexDirection: 'row',
},
TextInput: {
  // backgroundColor: "yellow",
  height: 40,
  flex: 1,
  padding: 9,
  // marginLeft: 20,
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
firstName: {
  height: 50,
  width: '60%',
  flex: 1,
  padding: 9,
  marginLeft: 20,
},
});

