export interface Like {
    postId: string;
    userId: string;
    id: string;
  }
  
  export type CreateLike = Omit<Like, "id">
  
  //FETCHING THE POSTS
//  export const getPosts = async () => {
//     try {
//       const response = await fetch('http://10.0.2.2:7001/likes/create');
//       const {posts} = await response.json();
//       // console.log(data)
//       return posts;
//     } catch (err: any) {
//       console.log(err);
//     }
//   };
  
  //CREATING THE POSTS
  export const createLike = async ({postId,userId}: CreateLike) => {
    try {
      const resBody = {postId,userId}
      const response = await fetch('http://10.0.2.2:7001/likes/create', {
        body: JSON.stringify(resBody),
        headers: {"Content-Type": "application/json"},
        method: "POST"
      });
      const responseData = await response.json();
      return responseData;
    } catch (err: any) {
      console.log("err fetching from backend", err);
    }
  };
  
  
  //DELETING THE POSTS
export const deleteLike = async (likeId: string) => {
    try {
      const response = await fetch(`http://10.0.2.2:7001/likes/${likeId}`, {
        method: "DELETE"
      });
      const responseData = await response.json();
      return responseData;
    } catch (err: any) {
      console.log("err fetching from backend", err);
    }
  };