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
  newMessage: string
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
  dispatch: (action: ActionsTypes) => void
}
const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE"

export type ActionsTypes =
  ReturnType<typeof addPostAC> |
  ReturnType<typeof updateNewPostTextAC> |
  ReturnType<typeof addMessageAC> |
  ReturnType<typeof updateNewMessageAC>

export const addPostAC = () => {
  return {
    type: ADD_POST
  } as const
}

export const updateNewPostTextAC = (text: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  } as const
}

export const addMessageAC = () => {
  return {
    type: ADD_MESSAGE
  } as const
}

export const updateNewMessageAC = (text: string) => {
  return {
    type: UPDATE_NEW_MESSAGE,
    newMessage: text
  } as const
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
      ],
      newMessage: ""
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

  dispatch(action: ActionsTypes) {
    if (action.type === ADD_POST) {
      const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      }

      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ""
      this._callSubscriber()
    }

    if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber()
    }

    if (action.type === ADD_MESSAGE) {
      const newMessage = {
        id: 6,
        message: this._state.dialogsPage.newMessage
      }

      this._state.dialogsPage.messages.push(newMessage)
      this._state.dialogsPage.newMessage = ""
      this._callSubscriber()
    }

    if (action.type === UPDATE_NEW_MESSAGE) {
      this._state.dialogsPage.newMessage = action.newMessage
      this._callSubscriber()
    }
  }
}
