import React, {useContext} from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {addPostAC, updateNewPostTextAC} from "../../redux/profile-reducer";
import {StoreType} from "../../redux/state";
import StoreContext from "../../StoreContext";


export const MyPostsContainer = () => {
  const store = useContext(StoreContext)

  let state = store.getState()

  let addPost = () => {
    store.dispatch(addPostAC())
  }

  let onPostChange = (text: string) => {
    store.dispatch(updateNewPostTextAC(text))
  }

  return <MyPosts
    updateNewPostText={onPostChange}
    addPost={addPost}
    posts={state.profilePage.posts}
    newPostText={state.profilePage.newPostText}
  />
}
