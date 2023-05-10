import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";

export function MyPosts(props: MyPostsPropsType) {

  let postsElements = props.posts.map(post => {
    return <Post key={post.id} message={post.message} id={post.id} likesCount={post.likesCount}/>
  })

  let newPostElement = React.createRef<HTMLTextAreaElement>()

  let addPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    if (newPostElement.current) {
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
