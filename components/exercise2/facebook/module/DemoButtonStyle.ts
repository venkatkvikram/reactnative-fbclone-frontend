import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Styles {
    container: ViewStyle;
    text: TextStyle;
  }
  
export  const styles = (width) => {
  return StyleSheet.create<Styles>({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 45,
      // minWidth: '45%',
      // maxWidth: '100%',
      width: "1%",
      marginHorizontal: width * 8,
      marginVertical: 4,
      borderRadius: 30,
    },
    text: {
      textAlign: 'center',
      color: 'white',
    },
  });
}