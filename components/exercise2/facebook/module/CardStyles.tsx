import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
      backgroundColor: 'white',
      marginTop: 30,
      position: "relative",
      // top: 50,
      shadowColor: '#000000',
      shadowOpacity: 0.5,
      shadowRadius: 2,
      shadowOffset: {
        height: 1,
        width: 1,
      },
      elevation: 5,
    },
    profileImage: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 10,
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 15,
      paddingBottom: 0,
      paddingRight: 15,
      paddingLeft: 15,
    },
    name: {
      fontSize: 18,
      fontWeight: '500',
    },
    description: {
      fontSize: 18,
      marginTop: 10,
      paddingLeft: 15,
      marginBottom: 5,
    },
    postImage: {
      width: Dimensions.get('window').width,
      height: 250,
      marginTop: 5,
    },
    icons: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    iconDiv: {
      width: '25%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 5,
      paddingBottom: 5,
      margin: 15
    },
    iconDivCommentView: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    iconDivView: {
      display: 'flex',
      flexDirection: 'row',
      gap: 20,
      alignItems: 'center',
    },
    deleteDivView: {
      color: "blue",
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      position: "absolute",
      top: 15,
      right: 15
    },

  });