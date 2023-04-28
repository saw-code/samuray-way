import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/state";
import {MyPostsContainer} from "./MyPostsContainer";



export function Profile() {

  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer />
    </div>
  )
}