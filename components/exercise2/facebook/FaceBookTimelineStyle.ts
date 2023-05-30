import { position } from "native-base/lib/typescript/theme/styled-system";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
    },
    buttonContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 8,
      width: "20%",
      

    },
    imageContainer: {
      marginVertical: 24,
      alignItems: 'center',
      
    },
    image: {
      width: 200,
      height: 200,
    },
    inputFieldContainer:{
      width: "100%",
      alignItems: 'center',
      position: 'absolute',
      // position: "relative",
      // top: 10,
      // left: 10,
      padding: 0,
      // marginHorizontal: 0,
      flexDirection: 'row',
      // borderStyle: "solid",
      // borderColor: "black",
      // borderWidth: 1,
      // marginRight: "5%",
      // borderRadius: 16,
      backgroundColor: 'white',
      height: 75,
      borderBottomWidth: 1,
      borderBottomColor: 'black',
    }
  });
  