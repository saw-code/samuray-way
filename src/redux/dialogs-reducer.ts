import {DialogsPageType} from "./state";

const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE"

const dialogsReducer = (state: DialogsPageType, action: DialogsActionsTypes): DialogsPageType => {
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
