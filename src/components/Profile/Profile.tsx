import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StatePropsType} from "../../redux/state";


export function Profile(props: StatePropsType) {

  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.posts}/>
    </div>
  )
}