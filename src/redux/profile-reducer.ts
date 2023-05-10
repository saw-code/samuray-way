const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

export type InitialStateType = {
  posts: PostPropsType[]
  newPostText: string
  profile: any
}

export type PostPropsType = {
  id: number
  message: string
  likesCount: number
}

let initialState = {
  posts: [
    {id: 1, message: "Hi, how are you?", likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 11},
  ] as PostPropsType[],
  newPostText: "" as string,
  profile: null
}

const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsTypes): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      }

      return {...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      }
    }

    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }

    case UPDATE_NEW_POST_TEXT: {
      return {...state, newPostText: action.newText}
    }

    default:
      return state
  }
}

export type ProfileActionsTypes =
  ReturnType<typeof addPostAC> |
  ReturnType<typeof updateNewPostTextAC> |
  ReturnType<typeof setUserProfile>

export const addPostAC = () => {
  return {
    type: ADD_POST
  } as const
}

export const setUserProfile = (profile: {}) => {
  return {
    type: SET_USER_PROFILE,
    profile
  } as const
}

export const updateNewPostTextAC = (text: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  } as const
}

export default profileReducer;