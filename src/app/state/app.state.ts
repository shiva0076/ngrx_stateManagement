import { counterReducer } from "../counter/state/counter.reducer";
import { CounterState } from "../counter/state/counter.store";
import { postReducer } from "../posts/state/post.reducer";
import { PostState } from "../posts/state/post.store";

export interface AppState{
counter : CounterState,
posts : PostState
}

export const appReducer = {
  counter: counterReducer,
  posts: postReducer
}
