import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type PostsType = {
  state: ProfilePageType
  addPost: (postMessage: string) => void
}

export function Profile(props: PostsType) {

  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.state.posts} addPost={props.addPost}/>
    </div>
  )
}