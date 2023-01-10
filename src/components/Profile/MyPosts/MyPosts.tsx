import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export function MyPosts() {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.content}>
        <Post message="Hi, how are you?"/>
        <Post message="It's my first post"/>
      </div>
    </div>
  )
}