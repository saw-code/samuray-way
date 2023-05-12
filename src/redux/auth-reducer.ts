const SET_USER_DATA = "SET_USER_DATA"

export type InitialStateType = {
  data: dataType
  isAuth: boolean
}

export type dataType = {
  userId: string,
  email: string,
  login: string,
}

export type AuthActionsTypes = ReturnType<typeof setAuthUserData>

let initialState = {
  data: {
    userId: "",
    email: "",
    login: "",
  },
  isAuth: false
}

const authReducer = (state: InitialStateType = initialState, action: AuthActionsTypes): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {...state, data: action.data,  isAuth: true}
    }

    default:
      return state
  }
}

export const setAuthUserData = (userId: string, email: string, login: string) => {
  return {
    type: SET_USER_DATA,
    data: {
      userId,
      email,
      login
    }
  } as const
}

export default authReducer;
