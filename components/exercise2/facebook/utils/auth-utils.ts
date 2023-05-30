
import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH_TOKEN_KEY = "token"


//stores the user at login time.
export const setAuthToken = async(value: string) => {
    try {
        await AsyncStorage.setItem(AUTH_TOKEN_KEY, value)
      } catch (e) {
        // saving error
      }
}

export const removeAuthToken = async() => {
    try {
        await AsyncStorage.removeItem(AUTH_TOKEN_KEY)
      } catch(e) {
        // remove error
      }
}

export const getAuthToken = async() => {
  try {
    const value = await AsyncStorage.getItem(AUTH_TOKEN_KEY)
   return value
  } catch(e) {
    // error reading value
  }
}

