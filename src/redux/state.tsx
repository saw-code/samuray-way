import {rerenderEntireTree} from "../render";

export type StatePropsType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
}

export type ProfilePageType = {
  posts: PostPropsType[]
  newPostText: string
}

export type PostPropsType = {
  id: number
  message: string
  likesCount: number
}

export type DialogsPageType = {
  dialogs: DialogPropsType[]
  messages: MessagePropsType[]
}

export type DialogPropsType = {
  id: number
  name: string
}

export type MessagePropsType = {
  id: number
  message: string
}

export const state: StatePropsType= {
  profilePage: {
    posts: [
      {id: 1, message: "Hi, how are you?", likesCount: 12},
      {id: 2, message: "It's my first post", likesCount: 11}
    ],
    newPostText: ""
  },

  dialogsPage: {
    dialogs: [
      {id: 1, name: "DimOk"},
      {id: 2, name: "Masha"},
      {id: 3, name: "Sveta"},
      {id: 4, name: "Sasha"},
      {id: 5, name: "Viktor"}
    ],
    messages: [
      {id: 1, message: "Hi"},
      {id: 2, message: "How is your it-kamasutra?"},
      {id: 3, message: "Yo"}
    ]
  }
}

export let addPost = () => {
  const newPost: PostPropsType = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  }

  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ""
  rerenderEntireTree(state)
}

export let updateNewPostText = (newText: string) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
}