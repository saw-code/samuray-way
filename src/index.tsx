import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type PropsPostsType = {
  posts?: Array<PropsPostType>
  dialogsData?: Array<DialogPropsType>
  messages?: Array<MessagePropsType>
}

export type PropsPostType = {
  id: number
  message: string
  likesCount: number
}

let posts = [
  {id: 1, message: "Hi, how are you?", likesCount: 12},
  {id: 2, message: "It's my first post", likesCount: 11},
]

export type MessagePropsType = {
  id: number
  message: string
}

let messages = [
  {id: 1, message: "Hi"},
  {id: 2, message: "How is your it-kamasutra?"},
  {id: 3, message: "Yo"}
]

export type DialogPropsType = {
  id: number
  name: string
}

let dialogsData = [
  {id: 1, name: "DimOk"},
  {id: 2, name: "Masha"},
  {id: 3, name: "Sveta"},
  {id: 4, name: "Sasha"},
  {id: 5, name: "Viktor"}
]

ReactDOM.render(
    <App posts={posts} dialogsData={dialogsData} messages={messages}/>,
    document.getElementById('root')
);