import type {Post, CreatePost} from '../types'


export const getPostById = async (id: string) => {
  try {
    const response = await fetch(`http://10.0.2.2:7001/posts/${id}`);
    const {post} = await response.json();
    // console.log(data)
    return post;
  } catch (err: any) {
    console.log(err);
  }
};

//FETCHING THE POSTS
export const getPosts = async () => {
  try {
    const response = await fetch('http://10.0.2.2:7001/posts');
    const {posts} = await response.json();
    // console.log(data)
    return posts;
  } catch (err: any) {
    console.log(err);
  }
};

//CREATING THE POSTS
export const createPost = async ({caption, imgURL, userId}: CreatePost) => {
  try {
    const resBody = {caption, imgURL, userId};
    const response = await fetch('http://10.0.2.2:7001/posts', {
      body: JSON.stringify(resBody),
      headers: {'Content-Type': 'application/json'},
      method: 'POST',
    });
    const responseData = await response.json();
    return responseData;
  } catch (err: any) {
    console.log('err fetching from backend', err);
  }
};

//DELETING THE POSTS
export const deletePost = async (postId: string, userId: string) => {
  try {
    const response = await fetch(`http://10.0.2.2:7001/posts/${postId}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        userId,
      }),
    });
    const responseData = await response.json();
    return responseData;
  } catch (err: any) {
    console.log('err fetching from backend', err);
  }
};
