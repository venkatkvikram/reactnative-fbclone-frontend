import * as React from 'react';
import {Text, ScrollView} from 'react-native';
import { styles } from './DemoResponseStyle';

export function DemoResponse({children}: React.PropsWithChildren<{}>) {
  if (children == null) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>{JSON.stringify(children, null, 2)}</Text>
    </ScrollView>
  );
}

