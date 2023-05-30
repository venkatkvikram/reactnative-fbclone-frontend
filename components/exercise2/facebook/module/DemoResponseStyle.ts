import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Styles {
    container: ViewStyle;
    text: TextStyle;
  }
  
export  const styles = StyleSheet.create<Styles>({
    container: {
      backgroundColor: 'red',
      marginVertical: 8,
      padding: 8,
      borderRadius: 8,
      maxHeight: 200,
    },
    text: {
      color: 'black',
    },
  });