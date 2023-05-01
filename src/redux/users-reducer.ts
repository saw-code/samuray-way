const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

export type InitialStateType = {
  users: UsersType[]
}

export type LocationType = {
  country: string
  city: string
}

export type UsersType = {
  id: number
  subscribe: boolean
  fullName: string
  photoUrl: string
  photos: {
    small: string
    large: string
  }
  status: string
  location: LocationType
}

let initialState = {
  users: []
}

const usersReducer = (state: InitialStateType = initialState, action: UsersActionTypes): InitialStateType => {
  switch (action.type) {
    case FOLLOW: {
      return {...state, users: state.users.map(el => el.id === action.userId ? {...el, subscribe: true} : el )}
    }

    case UNFOLLOW: {
      return {...state, users: state.users.map(el => el.id === action.userId ? {...el, subscribe: false} : el )}
    }

    case SET_USERS: {
      return {...state, users: [...state.users, ...action.users]}
    }

    default:
      return state
  }
}

export type UsersActionTypes =
  ReturnType<typeof subscribeAC> |
  ReturnType<typeof unsubscribeAC> |
  ReturnType<typeof setUsersAC>

export const subscribeAC = (userId: number) => {
  return {
    type: FOLLOW,
    userId
  } as const
}

export const unsubscribeAC = (userId: number) => {
  return {
    type: UNFOLLOW,
    userId
  } as const
}

export const setUsersAC = (users: UsersType[]) => {
  return {
    type: SET_USERS,
    users
  } as const
}

export default usersReducer;
