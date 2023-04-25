import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";

type PostsType = {
  profilePage: ProfilePageType
  dispatch: (action: ActionsTypes) => void
}

export function Profile(props: PostsType) {

  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.profilePage.posts}
               dispatch={props.dispatch}
               newPostText={props.profilePage.newPostText}
      />
    </div>
  )
}