import React from 'react';
import {MyPosts} from "./MyPosts";
import {addPostAC, PostPropsType, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type MapStateToPropsType = {
  posts: PostPropsType[]
  newPostText: string
}

type MapDispatchToProps = {
  updateNewPostText: (text: string) => void
  addPost: () => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToProps

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    updateNewPostText: (text: string) => {dispatch(updateNewPostTextAC(text))},
    addPost: () => {dispatch(addPostAC())}
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


// export const MyPostsContainer = () => {
//   const store = useContext(StoreContext)
//
//   let state = store.getState()
//
//   let addPost = () => {
//     store.dispatch(addPostAC())
//   }
//
//   let onPostChange = (text: string) => {
//     store.dispatch(updateNewPostTextAC(text))
//   }
//
//   return <MyPosts
//     updateNewPostText={onPostChange}
//     addPost={addPost}
//     posts={state.profilePage.posts}
//     newPostText={state.profilePage.newPostText}
//   />
// }
