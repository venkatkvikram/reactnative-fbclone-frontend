import React, {useEffect, useReducer, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
// import { AntDesign, Foundation, FontAwesome } from "@expo/vector-icons";
// import colors from "../config/colors";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './module/CardStyles';
import CommentAdd from './module/CommentAdd';
import Share from 'react-native-share';
import {getPostById} from './services/posts';
import {useAuthContext} from './public/context/auth-context';
import type {Like, Post} from './types';

interface CardPropType {
  onDelete: (id: string) => void;
  // userId: string;
  post: Post;
  idx: number;
}

export default function Card({
  post: initialPostData,
  onDelete,
  idx,
  ...rest
}: CardPropType) {
  const {user} = useAuthContext();
  const [pressed, setPressed] = useState(false);
  const handleOnPress = () => setPressed(previousState => !previousState);
  const [comment, setComment] = useState<string[]>([]);
  const addComment = (text: string) => {
    setComment(prevComment => [...prevComment, text]);
  };
  // const [isLiked, setIsLiked] = useState(false);
  const [post, setPost] = useState<Post>(initialPostData);
  console.log('post', post.Likes);
  const userLike = post?.Likes?.find(like => like.userId === user?.id) ?? null;
  // console.log({userId: user?.id})
  console.log({userLike});
  const isLiked = userLike ? true : false;

  const likesCount = post?.Likes?.length ?? 0;

  //LIKE AND UNLIKE FUNCTIONALITY
  const toggleLike = async () => {
    console.log({post});
    try {
      if (!isLiked) {
        const res = await fetch('http://10.0.2.2:7001/likes', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            userId: user?.id,
            postId: post.id,
          }),
        });
        const responseData = await res.json();
        console.log({responseData});
      } else {
        await fetch(`http://10.0.2.2:7001/likes/${userLike?.id}`, {
          method: 'DELETE',
        });
      }
      const updatedPost = await getPostById(post.id);
      setPost(updatedPost);
    } catch (error) {}
  };

  //SHARING FUNCTIONALITY
  const myCustomShare = async () => {
    const shareOptions = {
      message: 'This is a test message',
    };
    try {
      const ShareResponse = await Share.open(shareOptions);
    } catch (error) {
      console.log('Error =>', error);
    }
  };

  //DELETE COOMMENT
  const deleteComment = (id: number) => {
    setComment(prevComment => prevComment.filter((comment, idx) => idx != id));
  };

  useEffect(() => {
    getPostById(post.id)
      .then(data => {
        setPost(data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  //we're going to fetch a post with postid which should also include all the likes for that particular post.
  // console.log(user.id, userId);
  return (
    <View style={[styles.card, {marginTop: idx > 0 ? 30 : 80}]}>
      {user?.id === post.userId && (
        <TouchableHighlight
          onPress={() => onDelete(post.id)}
          underlayColor="rgba(255, 255, 255,)">
          <View style={styles.deleteDivView}>
            <Icon name="delete" size={20} color="red" />
            {/* <Text >Delete</Text> */}
          </View>
        </TouchableHighlight>
      )}
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={{
            uri: user?.profileImageURL,
          }}
        />
        <View>
          <Text style={styles.name}>{post.User?.userName}</Text>
          {/* <Text>{title}</Text> */}
        </View>
      </View>
      {post.caption && <Text style={styles.description}>{post.caption}</Text>}

      {post.imgURL && (
        <Image
          style={styles.postImage}
          source={{
            uri: post.imgURL,
          }}
        />
      )}

      <View style={styles.icons}>
        <TouchableHighlight
          onPress={toggleLike}
          style={styles.iconDiv}
          underlayColor="rgba(255, 255, 255,)">
          <View style={styles.iconDivView}>
            <Icon name="thumb-up" size={20} color={isLiked ? 'blue' : 'gray'} />
            <Text style={[isLiked && {color: 'blue'}, {marginLeft: 5}]}>
              {likesCount > 0 ? likesCount : null}
              {isLiked ? ' Likes' : ' Like'}
              
               
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={handleOnPress}
          style={styles.iconDiv}
          underlayColor="rgba(255, 255, 255,)">
          <View style={styles.iconDivView}>
            <Icon
              name="comment"
              size={20}
              color={pressed ? '29a9ff' : 'gray'}
            />
            <Text style={{marginLeft: 5}}>Comment</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={myCustomShare}
          style={styles.iconDiv}
          underlayColor="rgba(255, 255, 255,)">
          <View style={styles.iconDivView}>
            <Icon name="send" size={20} color="gray" />
            <Text style={{marginLeft: 5}}>Share</Text>
          </View>
        </TouchableHighlight>
      </View>
      {pressed && (
        <CommentAdd
          onAdd={addComment}
          comments={comment}
          color={''}
          fontSize={0}
          onDelete={deleteComment}
          title="Vikram"
        />
      )}
    </View>
  );
}
