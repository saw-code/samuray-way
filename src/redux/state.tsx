import profileReducer, {ProfileActionsTypes} from "./profile-reducer";
import dialogsReducer, {DialogsActionsTypes} from "./dialogs-reducer";
import {ReduxStoreType} from "./redux-store";

export type StatePropsType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  sidebar: {}
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

export type ActionsTypes = ProfileActionsTypes | DialogsActionsTypes

export type StoreType = ReduxStoreType

// export type StoreType = {
//   _state: StatePropsType
//   _callSubscriber: () => void
//   getState: () => StatePropsType
//   subscribe: (observer: () => void) => void
//   dispatch: (action: ActionsTypes) => void
//
//   dialogsPage: DialogPropsType
//   profilePage: ProfilePageType
//   sidebar: {}
// }

// export let store: StoreType = {
//   _state: {
//     profilePage: {
//       posts: [
//         {id: 1, message: "Hi, how are you?", likesCount: 12},
//         {id: 2, message: "It's my first post", likesCount: 11}
//       ],
//       newPostText: ""
//     },
//
//     dialogsPage: {
//       dialogs: [
//         {id: 1, name: "DimOk"},
//         {id: 2, name: "Masha"},
//         {id: 3, name: "Sveta"},
//         {id: 4, name: "Sasha"},
//         {id: 5, name: "Viktor"}
//       ],
//       messages: [
//         {id: 1, message: "Hi"},
//         {id: 2, message: "How is your it-kamasutra?"},
//         {id: 3, message: "Yo"}
//       ],
//       newMessage: ""
//     },
//
//     sidebar: {}
//   },
//   _callSubscriber() {
//     console.log("State changed")
//   },
//
//   getState() {
//     return this._state
//   },
//
//   subscribe(observer) {
//     this._callSubscriber = observer
//   },
//
//   dispatch(action ) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action as ProfileActionsTypes)
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action as DialogsActionsTypes)
//
//     this._callSubscriber()
//   }
// }
