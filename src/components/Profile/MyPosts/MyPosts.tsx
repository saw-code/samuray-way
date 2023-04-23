import React, {ChangeEvent, useState} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostPropsType} from "../../../redux/state";

type PostType = {
  posts: PostPropsType[]
  addPost: (text: string) => void
  updateNewPostText: (newText: string) => void
  newPostText: string
}

export function MyPosts(props: PostType) {

  let postsElements = props.posts.map(post => {
    return <Post message={post.message} id={post.id} likesCount={post.likesCount}/>
  })

  let newPostElement = React.createRef<HTMLTextAreaElement>()

  let addPost = () => {
    if (newPostElement.current) {
      let post = newPostElement.current.value
      props.addPost(post)
    }
  }

  let onPostChange = () => {
    if (newPostElement.current){
      let text = newPostElement.current.value
      props.updateNewPostText(text)
    }
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
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
