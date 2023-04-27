import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/state";
import {MyPostsContainer} from "./MyPostsContainer";

type PostsType = {
  store: StoreType
}

export function Profile(props: PostsType) {

  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer store={props.store}/>
    </div>
  )
}