const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE"

export type DialogPropsType = {
  id: number
  name: string
}

export type MessagePropsType = {
  id: number
  message: string
}

export type InitialStateType = {
  dialogs: DialogPropsType[]
  messages: MessagePropsType[]
  newMessage: string
}

let initialState = {
  dialogs: [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Victor"},
    {id: 6, name: "Valera"}
  ] as DialogPropsType[],
  messages: [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your it-kamasutra?"},
    {id: 3, message: "Yo"},
    {id: 4, message: "Yo"},
    {id: 5, message: "Yo"},
  ] as MessagePropsType[],
  newMessage: "" as string
}

const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionsTypes): InitialStateType => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessageBody = state.newMessage

      return {...state,
        messages: [...state.messages, {id: 6, message: newMessageBody}],
        newMessage: ""
      }
    }

    case UPDATE_NEW_MESSAGE: {
      return {...state, newMessage: action.newMessage}
    }

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
