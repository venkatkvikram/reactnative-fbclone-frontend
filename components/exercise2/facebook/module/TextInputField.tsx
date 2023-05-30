// import { Button } from 'native-base';
import {Button} from 'native-base';
import React, {useCallback, useState} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import Card from '../Card';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {flexbox} from 'native-base/lib/typescript/theme/styled-system';
import {DemoButton} from './DemoButton';
import * as ImagePicker from 'react-native-image-picker';
// import { CreatePost } from '../FaceBookTimeline';
import { useAuthContext } from '../public/context/auth-context';
import type { CreatePost } from '../types';
const includeExtra = true;



interface Props {
  onPostAdd: (post: CreatePost) => void;
}


const TextInputField = (props: Props) => {
  // const screen = Dimensions.get("screen").height;
  const {user} = useAuthContext();
  const [text, setText] = useState('');

  const [response, setResponse] = useState<any>(null);
  // const [data, setData] = useState<Post[]>([]);

  const addPost = () => {
    if(!user) {
      return
    }
    // console.log(response);
    props.onPostAdd({
      caption: text,
      imgURL: response?.assets?.[0].uri ?? null,
      userId: user.id,
    });
    setResponse(null);
    setText('');
  };

  const onButtonPress = useCallback(async (type: any, options: any) => {
    if (type === 'capture') {
      const response = await ImagePicker.launchCamera(options, setResponse);
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Icon
        // style={styles.iconContainer}
        name="attach-file"
        size={25}
        color="blue"
        onPress={() => onButtonPress(actions[0].type, actions[0].options)}
      />
      <TextInput
        style={styles.inputContainer}
        placeholder="Write something here..."
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      {/* <Text style={{padding: 10, fontSize: 32, color: 'red'}}>
        {text
          .split(' ')
          .map(word => word)
          .join(' ')}
      </Text> */}
      <DemoButton 
        onPress={() => {
          addPost();
        }}>
        Post
      </DemoButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    // position: "relative",
    top: 10,
    left: 10,
    padding: 0,
    // marginHorizontal: 0,
    flexDirection: 'row',
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    marginRight: "5%",
    borderRadius: 16,
    width: "93%",
  },
  inputContainer: {
    height: 40,
    width: 250,
    // borderWidth: 2,
    border: "none",
    // borderColor: 'grey',
    // backgroundColor: '#c9b5b5',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 12,
    // },
    // shadowOpacity: 0.51,
    // shadowRadius: 16.0,
    // elevation: 24,
    zIndex: 2,
  },
  iconContainer: {
    position: 'absolute',
    zIndex: 3,
    right: 160,
    top: 13,
  },
});

interface Action {
  title: string;
  type: 'capture' | 'library';
  options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions;
}

const actions: Action[] = [
  {
    title: 'Take Image',
    type: 'capture',
    options: {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  },
];

export default TextInputField;
