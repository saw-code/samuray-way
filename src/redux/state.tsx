export type StatePropsType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
}

export type ProfilePageType = {
  posts: PostPropsType[]
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
    ]
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

export let addPost = (postMessage: string) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  }

  state.profilePage.posts.push(newPost)
}