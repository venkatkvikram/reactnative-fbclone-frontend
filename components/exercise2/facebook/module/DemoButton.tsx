import React from 'react';
import { Text, Pressable} from 'react-native';
import { styles } from './DemoButtonStyle';

interface Props {
  onPress: () => void;
  style?: string | number
}

export function DemoButton({
  onPress,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? 'skyblue' : 'blue',
        },
        styles.container,
      ]}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}


