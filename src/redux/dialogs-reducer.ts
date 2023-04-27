import {DialogsPageType} from "./state";

const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE"

let initialState = {
  dialogs: [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Victor"},
    {id: 6, name: "Valera"}
  ],
  messages: [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your it-kamasutra?"},
    {id: 3, message: "Yo"},
    {id: 4, message: "Yo"},
    {id: 5, message: "Yo"},
  ],
  newMessage: ""
}

const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionsTypes): DialogsPageType => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessageBody = state.newMessage

      state.messages.push({id: 6, message: newMessageBody})
      state.newMessage = ""
      return state

    case UPDATE_NEW_MESSAGE:
      state.newMessage = action.newMessage
      return state

    default:
      return state
  }
}

export type DialogsActionsTypes =
  ReturnType<typeof addMessageAC> |
  ReturnType<typeof updateNewMessageAC>

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

export default dialogsReducer;
