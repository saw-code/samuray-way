import React, {ChangeEvent, useState} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostPropsType} from "../../../redux/state";

type PostType = {
  posts: PostPropsType[]
}

export function MyPosts(props: PostType) {

  let [text, setText] = useState("")

  let postsElements = props.posts.map(post => {
    return <Post message={post.message} id={post.id} likesCount={post.likesCount}/>
  })

  let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value)
  }

  let addPost = () => {
    return alert(text)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onChangeHandler}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.content}>
        {postsElements}
      </div>
    </div>
  )
}