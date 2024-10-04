import { Post } from "src/app/models/post.model";

export interface PostState {
  posts: Post[];
}

export const postInitialState: PostState = {
  posts: [
    {
      id: 1, title: 'Title1', desc: 'title1'
    },
    {
      id: 2, title: 'Title2', desc: 'title2'
    },
    {
      id: 3, title: 'Title3', desc: 'title3'
    }
  ]
}
