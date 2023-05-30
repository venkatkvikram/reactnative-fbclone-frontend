import React, { useEffect } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import { getAuthToken } from '../../utils/auth-utils';

export default function LoadingScreen({navigation}:any) {

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={styles.imageSize}
        source={require('../../logo/facebook.png')}
      />
      {/*  */}
    </View>
  );
}

const styles = StyleSheet.create({
  imageSize: {
    width: '60%',
    height: '10%',
    padding: 10,
  },
});

//ROUTER, SIGN UP, TIMELINE
