import React, {ChangeEvent, useState} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, PostPropsType} from "../../../redux/state";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";

type PostType = {
  posts: PostPropsType[]
  dispatch: (action: ActionsTypes) => void
  newPostText: string
}

export function MyPosts(props: PostType) {

  let postsElements = props.posts.map(post => {
    return <Post message={post.message} id={post.id} likesCount={post.likesCount}/>
  })

  let newPostElement = React.createRef<HTMLTextAreaElement>()

  let addPost = () => {
    props.dispatch(addPostAC())
  }

  let onPostChange = () => {
    if (newPostElement.current) {
      let text = newPostElement.current.value
      props.dispatch(updateNewPostTextAC(text))
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
