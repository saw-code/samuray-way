import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {addPostAC, updateNewPostTextAC} from "../../redux/profile-reducer";
import {StoreType} from "../../redux/state";

type PostsContainerType = {
  store: StoreType
}

export const MyPostsContainer = (props: PostsContainerType) => {
  let state = props.store.getState()

  let addPost = () => {
    props.store.dispatch(addPostAC())
  }

  let onPostChange = (text: string) => {
    props.store.dispatch(updateNewPostTextAC(text))
  }

  return <MyPosts
    updateNewPostText={onPostChange}
    addPost={addPost}
    posts={state.profilePage.posts}
    newPostText={state.profilePage.newPostText}
  />
}
