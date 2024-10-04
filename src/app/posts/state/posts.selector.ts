import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./post.store";

const getPostsState = createFeatureSelector<PostState>('posts');

export const getPosts = createSelector(getPostsState, (state)=>{
  return state.posts;
});

// export const getPostById = createSelector(getPostsState, (state, props) => {
//   return state.posts.find(post1 => post1.id == props.id);
// });

export const getPostById = createSelector(getPostsState,(state: { posts: any[]; }, props: { id: any; })=>{
  return state.posts.find((post: { id: any; }) => post.id == props.id);
});

