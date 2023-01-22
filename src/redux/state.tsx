import {message} from "antd";

export type StatePropsType = {
  profilePage?: ProfilePageType
  messagesPage?: MessagesPageType
}

export type PostPropsType = {
  id: number
  message: string
  likesCount: number
}

export type DialogPropsType = {
  id: number
  name: string
}

export type ProfilePageType = {
  posts: PostPropsType[]
  dialogsData: DialogPropsType[]
}

export type MessagesPageType = {
  messages: MessagePropsType[]
}

export type MessagePropsType = {
  id: number
  message: string
}

export const state: StatePropsType= {
  profilePage: {
    posts: [
      {id: 1, message: "Hi, how are you?", likesCount: 12},
      {id: 2, message: "It's my first post", likesCount: 11},
    ],
    dialogsData: [
      {id: 1, name: "DimOk"},
      {id: 2, name: "Masha"},
      {id: 3, name: "Sveta"},
      {id: 4, name: "Sasha"},
      {id: 5, name: "Viktor"}
    ]
  },
  messagesPage: {
    messages: [
      {id: 1, message: "Hi"},
      {id: 2, message: "How is your it-kamasutra?"},
      {id: 3, message: "Yo"}
    ]
  }
}
