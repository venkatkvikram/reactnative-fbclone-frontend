import * as React from 'react';
import {View, Text} from 'react-native';
import {styles} from './DemoTitleStyle';

interface Props {
  children: string;
}

export function DemoTitle({children}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}
