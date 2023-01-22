import React from "react";
import {PostPropsType} from "../../../../redux/state";
import s from "./Post.module.css"

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