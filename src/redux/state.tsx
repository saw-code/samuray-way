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

export type StoreType = {
  _state: StatePropsType
  addPost: () => void
  getState: () => StatePropsType
  _callSubscriber: () => void
  updateNewPostText: (newText: string) => void
  subscribe: (observer: () => void) => void
}

export let store: StoreType = {
  _state: {
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
  },
  getState() {
    return this._state
  },
  _callSubscriber() {
    console.log("State changed")
  },
  addPost() {
    const newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    }

    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ""
    this._callSubscriber()
  },
  updateNewPostText(newText: string) {
    this._state.profilePage.newPostText = newText
    this._callSubscriber()
  },
  subscribe(observer) {
    this._callSubscriber = observer
  }
}

// export const state: StatePropsType= {
//   profilePage: {
//     posts: [
//       {id: 1, message: "Hi, how are you?", likesCount: 12},
//       {id: 2, message: "It's my first post", likesCount: 11}
//     ],
//     newPostText: ""
//   },
//
//   dialogsPage: {
//     dialogs: [
//       {id: 1, name: "DimOk"},
//       {id: 2, name: "Masha"},
//       {id: 3, name: "Sveta"},
//       {id: 4, name: "Sasha"},
//       {id: 5, name: "Viktor"}
//     ],
//     messages: [
//       {id: 1, message: "Hi"},
//       {id: 2, message: "How is your it-kamasutra?"},
//       {id: 3, message: "Yo"}
//     ]
//   }
// }
//
// export const addPost = () => {
//   const newPost: PostPropsType = {
//     id: 5,
//     message: state.profilePage.newPostText,
//     likesCount: 0
//   }
//
//   state.profilePage.posts.push(newPost)
//   state.profilePage.newPostText = ""
//   rerenderEntireTree()
// }
//
// export const updateNewPostText = (newText: string) => {
//   state.profilePage.newPostText = newText
//   rerenderEntireTree()
// }
//
// export let subscribe = (observer: () => void) => {
//   rerenderEntireTree = observer
// }


// let store = {
//     _state: {
//       profilePage: {
//         posts: [
//           {id: 1, message: "Hi, how are you?", likesCount: 12},
//           {id: 2, message: "It's my first post", likesCount: 11}
//         ],
//         newPostText: ""
//       },
//
//       dialogsPage: {
//         dialogs: [
//           {id: 1, name: "DimOk"},
//           {id: 2, name: "Masha"},
//           {id: 3, name: "Sveta"},
//           {id: 4, name: "Sasha"},
//           {id: 5, name: "Viktor"}
//         ],
//         messages: [
//           {id: 1, message: "Hi"},
//           {id: 2, message: "How is your it-kamasutra?"},
//           {id: 3, message: "Yo"}
//         ]
//       }
//     },
//     addPost(): {
//       const newPost: PostPropsType = {
//       id: 5,
//         message: state.profilePage.newPostText,
//         likesCount: 0
//     }
//
//     state.profilePage.posts.push(newPost)
//     state.profilePage.newPostText = ""
//     rerenderEntireTree()
//   },
//   updateNewPostText(newText: string): {
//   state.profilePage.newPostText = newText
//   rerenderEntireTree()
// },
//   subscribe(observer: () => void): {
//   rerenderEntireTree = observer
// }
// }