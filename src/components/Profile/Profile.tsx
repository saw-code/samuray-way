import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type PostsType = {
  profilePage: ProfilePageType
  addPost: () => void
  updateNewPostText: (newText: string) => void
}

export function Profile(props: PostsType) {

  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.profilePage.posts}
               addPost={props.addPost}
               updateNewPostText={props.updateNewPostText}
               newPostText={props.profilePage.newPostText}
      />
    </div>
  )
}