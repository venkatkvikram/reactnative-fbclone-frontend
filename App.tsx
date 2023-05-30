/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Box} from 'native-base';
import React, {
  Children,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SafeNav from './components/exercise1/SafeNav';
// import SafeNav from './components/exercise1/SafeNav';
import TopNav from './components/exercise1/TopNav';
import {DemoTitle} from './components/exercise2/facebook/module/DemoTitle';
import {
  AuthContextProvider,
  useAuthContext,
} from './components/exercise2/facebook/public/context/auth-context';
import Demo from './components/exercise2/facebook/public/Demo';
import {ForgotPassword} from './components/exercise2/facebook/public/ForgotPassword';
import Homepage from './components/exercise2/facebook/public/login/Homepage';
import Login from './components/exercise2/facebook/public/login/Homepage';
import LoadingScreen from './components/exercise2/facebook/public/login/LoadingScreen';
import {Register} from './components/exercise2/facebook/public/register/Register';
import {getAuthToken} from './components/exercise2/facebook/utils/auth-utils';
import TopNavBar from './components/exercise2/TopNavBar';
// import MainContainer from './navigation/MainContainer';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [initialRouteName, setInitialRouteName] = useState('LoginHome');
  const {changeUser} = useAuthContext();
  useEffect(() => {
    getAuthToken()
      .then(userId => fetch(`http://10.0.2.2:7001/users/${userId}`))
      .then(res => res.json())
      .then(({user}) => {
        changeUser(user);
        console.log(user);
        setInitialRouteName('TimeLine');
      })
      .catch(() => {})
      .finally(() => {});
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const Stack = createNativeStackNavigator();
  return (
    <>
      {/* <Login /> */}
      {/* <TopNav />
    <SafeNav /> */}
      {/* <AmberTabNav /> */}
      {/* <MainContainer /> */}
      {/* <DemoTitle>facebook</DemoTitle>
    <TopNavBar /> */}

        {isLoading ? (
          <LoadingScreen />
        ) : (
          <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRouteName}>
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen name="LoginHome" component={Homepage} />
              <Stack.Screen name="TimeLine" component={TopNavBar} />
            </Stack.Navigator>
          </NavigationContainer>
        )}
      
    </>
  );
};


export default  function AppWithGlobalContext  ({children}: {children:JSX.Element}) {
  return <AuthContextProvider><App /></AuthContextProvider>;
};
