import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export function MyPosts() {
  let postsData = [
    {id: 1, message: "Hi, how are you?", likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 11},
  ]

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.content}>
        <Post message={postsData[0].message} id={postsData[0].id} likesCount={postsData[0].likesCount}/>
        <Post message={postsData[1].message} id={postsData[1].id} likesCount={postsData[1].likesCount}/>
      </div>
    </div>
  )
}