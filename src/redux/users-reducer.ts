const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"

export type InitialStateType = {
  users: UsersType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
}

export type LocationType = {
  country: string
  city: string
}

export type UsersType = {
  id: number
  subscribe: boolean
  name: string
  photoUrl: string
  photos: {
    small: string
    large: string
  }
  status: string
  location: LocationType
}

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1
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
      return {...state, users: [...action.users, ...state.users]}
    }

    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage}
    }

    case SET_TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.totalCount}
    }

    default:
      return state
  }
}

export type UsersActionTypes =
  ReturnType<typeof subscribeAC> |
  ReturnType<typeof unsubscribeAC> |
  ReturnType<typeof setUsersAC> |
  ReturnType<typeof setCurrentPageAC> |
  ReturnType<typeof setTotalUsersCountAC>

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

export const setCurrentPageAC = (currentPage: number) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  } as const
}

export const setTotalUsersCountAC = (totalCount: number) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalCount
  } as const
}

export default usersReducer;
