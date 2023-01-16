import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export function Profile() {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts />
    </div>
  )
}