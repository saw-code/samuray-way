import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {StatePropsType} from "../../../redux/state";


export function MyPosts(props: StatePropsType) {

  let postsElements = props.posts?.map(post => {
    return <Post message={post.message} id={post.id} likesCount={post.likesCount}/>
  })

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
        {postsElements}
      </div>
    </div>
  )
}