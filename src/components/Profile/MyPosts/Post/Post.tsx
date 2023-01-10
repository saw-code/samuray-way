import React from "react";
import s from './Post.module.css'

export function Post() {
  return (
    <div>
      <div className={s.item}>
        <img
          src="https://thumbs.dreamstime.com/z/funny-cartoon-monster-face-vector-monster-square-avatar-funny-cartoon-monster-zombie-face-vector-halloween-monster-square-avatar-175918631.jpg"/>
        post 1
        <div>
          <span>like</span>
        </div>
      </div>
    </div>
  )
}