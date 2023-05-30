import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {DemoButton} from './DemoButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
interface Props {
  onAdd: (text: string) => void;
  comments: string[];
  color: string;
  fontSize: number;
  onDelete: (id: number) => void;
  title: string;
}

function CommentAdd(props: Props) {
  const [text, setText] = useState(''); //to set the text from input feild

  const addComment = () => {
    props.onAdd(text);
    setText('');
  };

  const deleteComment = (id: number) => {
    props.onDelete(id);
  };

  return (
    <View>
      <TouchableHighlight>
        <View style={styles.commentContainer}>
          <TextInput
            placeholder="Add comment..."
            onChangeText={text => setText(text)}
            value={text}
            style={styles.textInputContainer}
          />
          <TouchableHighlight onPress={addComment} style={styles.commentButton}>
            <Text style={styles.text}>Add</Text>
          </TouchableHighlight>
        </View>
      </TouchableHighlight>
      {props.comments.map((item, id) => {
        return (
          <TouchableHighlight>
            <View key={id} >
              {/* <DemoTitle>Vikram</DemoTitle> */}
              <Text style={styles.titleName}>{props.title}</Text>
              <View style={styles.test}>
              <Text style={{display: "flex", flexDirection: "column"}}>{item}</Text>
              <Icon
                name="delete"
                size={20}
                color="red"
                onPress={() => deleteComment(id)}
              />
            </View>
            </View>
            
          </TouchableHighlight>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
    zIndex: 3,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    margin: 10,
  },
  commentButton: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginBottom: 3,
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#29a9ff',
  },
  text: {
    // fontSize: 12,
    color: 'white',
  },
  textContainer: {
    fontSize: 0,
    color: 'black',
  },
  textInputContainer: {
    fontSize: 15,
    color: 'black',
    flex: 1,
  },
  test: {
    height: 50,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    fontSize: 20,
    display: 'flex',
    border: 'solid',
    borderWidth: 1,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "aliceblue"
  },
  titleName: {
    fontSize: 18,
    fontWeight: '500',
    // border: 'solid',
    // borderWidth: 3,
    padding: 3
  },
});

export default CommentAdd;
