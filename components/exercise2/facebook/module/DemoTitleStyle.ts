import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Styles {
  container: ViewStyle;
  text: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 16,
    backgroundColor: '#1877F2',
    paddingLeft: 10
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
});
