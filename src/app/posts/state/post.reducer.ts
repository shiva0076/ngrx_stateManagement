import { createReducer, on } from "@ngrx/store";
import { postInitialState } from "./post.store";
import { addPost, updatePost } from "./post.actions";
import { state } from "@angular/animations";
import { Action } from "rxjs/internal/scheduler/Action";

export function postReducer(state: any, action: any) {
  return _postReducer(state, action);
}

const _postReducer = createReducer(postInitialState, on(addPost, (state, action) => {
  let post = { ...action.postData };
  post.id = (state.posts.length + 1)
  return {
    ...state,
    posts: [...state.posts, post]
  }
}),
  on(updatePost, (state, action) => {
    const updatedPost = state.posts.map(post => {
      return action.updatePostData.id === post.id ? action.updatePostData : post;
    });

    return {
      ...state,
      posts: updatedPost
    };
  })
);
