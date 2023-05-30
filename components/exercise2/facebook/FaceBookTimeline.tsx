import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, View, Image, ScrollView} from 'react-native';
// import {DemoTitle, DemoButton, DemoResponse} from './components';

import * as ImagePicker from 'react-native-image-picker';
import TextInputField from './module/TextInputField';
import Card from './Card';
import {styles} from './FaceBookTimelineStyle';
import {DemoButton} from './module/DemoButton';
import {DemoResponse} from './module/DemoResponse';
import {DemoTitle} from './module/DemoTitle';
import {Button} from 'native-base';
import {createPost, deletePost, getPosts} from './services/posts';
import {useAuthContext} from './public/context/auth-context';
import type {Post} from './types';
/* toggle includeExtra */
const includeExtra = true;

// export interface Post {
//   caption: string;
//   imgURL: string | null;
//   id: string;
//   userId: string;
// }

// export type CreatePost = Omit<Post, "id">

// //FETCHING THE POSTS
// const fetchPosts = async () => {
//   try {
//     const response = await fetch('http://10.0.2.2:7001/posts');
//     const {posts} = await response.json();
//     // console.log(data)
//     return posts;
//   } catch (err: any) {
//     console.log(err);
//   }
// };

// //CREATING THE POSTS
// const createPost = async ({caption, imgURL,userId}: CreatePost) => {
//   try {
//     const resBody = {caption,imgURL,userId}
//     const response = await fetch('http://10.0.2.2:7001/posts', {
//       body: JSON.stringify(resBody),
//       headers: {"Content-Type": "application/json"},
//       method: "POST"
//     });
//     const responseData = await response.json();
//     return responseData;
//   } catch (err: any) {
//     console.log("err fetching from backend", err);
//   }
// };

// //DELETING THE POSTS
// const deletePost = async (postId: string) => {
//   try {
//     const response = await fetch(`http://10.0.2.2:7001/posts/${postId}`, {
//       method: "DELETE"
//     });
//     const responseData = await response.json();
//     return responseData;
//   } catch (err: any) {
//     console.log("err fetching from backend", err);
//   }
// };

function FaceBookTimeline() {
  const [response, setResponse] = useState<any>(null);
  const [data, setData] = useState<Post[]>([]);
  const {user} = useAuthContext();
  // console.log('data', data);

  useEffect(() => {
    getPosts()
      .then(posts => {
        setData(posts);
      })
      .catch(err => console.log(err));
  }, []);

  async function addPostHandler(postData: Omit<Post, 'id'>) {
    //<Interface, property inside that interface>

    console.log('postData', postData);
    if (postData && postData.caption == '' && postData.imgURL == null) {
      return;
    }
    try {
      console.log('await try');

      const responseData = await createPost({
        caption: postData.caption,
        imgURL: postData.imgURL,
        userId: postData.userId,
      });
      console.log(responseData);
      if (responseData.success) {
        getPosts()
          .then(posts => {
            console.log("posts",posts)
            setData(posts);
          })
          .catch(err => console.log(err));
      }
    } catch (err) {
      console.log('addPostawait ', err);
    }
  }

  //   // setData(pData => [{...postData, id: Math.random().toString()}, ...pData]);
  // }

  async function deletePostHandler(postId: Post['id']) {
    if (!user) return;
    const responseData = await deletePost(postId, user.id);
    if (responseData.success) {
      getPosts()
        .then(posts => {
          setData(posts);
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {data
          ? data.map((post,idx) => (
              <Card
              idx={idx}
                key={post.id}
                post={post}
                // idx={idx}
                // userId={userId}

                // title="Home"
                // description={caption}
                // images={imgURL}
                // profileImage="https://st1.latestly.com/wp-content/uploads/2022/12/Lionel-Messi-1-2.jpg"
                // likes="edsjd"
                // id={id}
                onDelete={deletePostHandler}
              />
            ))
          : ''}
      </ScrollView>
      <View style={styles.inputFieldContainer}>
        <TextInputField onPostAdd={addPostHandler} />
      </View>
    </SafeAreaView>
  );
}

interface Action {
  title: string;
  type: 'capture' | 'library';
  options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions;
}

const actions: Action[] = [
  {
    title: 'Post',
    type: 'capture',
    options: {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  },
];

export default FaceBookTimeline;
