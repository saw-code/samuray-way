import {ProfilePageType} from "./state";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const profileReducer = (state: ProfilePageType, action: ProfileActionsTypes): ProfilePageType => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      }

      state.posts.push(newPost)
      state.newPostText = ""
      return state

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText
      return state

    default:
      return state
  }
}

export type ProfileActionsTypes =
  ReturnType<typeof addPostAC> |
  ReturnType<typeof updateNewPostTextAC>

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

export default profileReducer;