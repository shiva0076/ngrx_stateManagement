import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/post.model";

const ADD_POST_ACTION = '[post page] add post';
const UPDATE_POST_ACTION = '[post page] update post';


export const addPost = createAction(ADD_POST_ACTION, props<{postData:Post}>());
export const updatePost = createAction(UPDATE_POST_ACTION, props<{updatePostData:Post}>());



