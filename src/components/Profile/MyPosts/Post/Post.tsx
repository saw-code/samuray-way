import React from "react";
import s from "./Post.module.css"
import {PostPropsType} from "../../../../redux/profile-reducer";

export function Post(props: PostPropsType) {
  return (
    <div>
      <div className={s.dialog}>
        <img
          src="https://thumbs.dreamstime.com/z/funny-cartoon-monster-face-vector-monster-square-avatar-funny-cartoon-monster-zombie-face-vector-halloween-monster-square-avatar-175918631.jpg"/>
        {props.message}
        <div>
          <span>like {props.likesCount}</span>
        </div>
      </div>
    </div>
  )
}