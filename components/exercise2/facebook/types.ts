export interface Post {
  id: string;
  userId: string;
  caption: string;
  imgURL: string;
  Likes?: Like[];
  User?: User;
}

export interface Like {
  id: string;
  userId: string;
  postId: string;
}


export interface User {
  id: string;
  email: string;
  userName: string;
  profileImageURL: string;
}

export type CreatePost = Omit<Post, 'id'>;
