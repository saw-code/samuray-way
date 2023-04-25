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
  _callSubscriber: () => void
  getState: () => StatePropsType
  subscribe: (observer: () => void) => void
  dispatch: (action: ActionType) => void
}

export type AddPostActionType = {
  type: "ADD-POST"
}

export type UpdateNewPostTextActionType = {
  type: "UPDATE-NEW-POST-TEXT"
  newText: string
}

export type ActionType = AddPostActionType | UpdateNewPostTextActionType


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
  _callSubscriber() {
    console.log("State changed")
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action: ActionType) {
    if (action.type === "ADD-POST") {
      const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      }

      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ""
      this._callSubscriber()
    }

    if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber()
    }
  }
}
