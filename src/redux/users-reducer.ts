const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

export type InitialStateType = {
  users: UsersType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
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
  currentPage: 1,
  isFetching: false
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
      return {...state, users: action.users}
    }

    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage}
    }

    case SET_TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.totalCount}
    }

    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching}
    }

    default:
      return state
  }
}

export type UsersActionTypes =
  ReturnType<typeof subscribe> |
  ReturnType<typeof unsubscribe> |
  ReturnType<typeof setUsers> |
  ReturnType<typeof setCurrentPage> |
  ReturnType<typeof setTotalUsersCount> |
  ReturnType<typeof toggleIsFetching>

export const subscribe = (userId: number) => {
  return {
    type: FOLLOW,
    userId
  } as const
}

export const unsubscribe = (userId: number) => {
  return {
    type: UNFOLLOW,
    userId
  } as const
}

export const setUsers = (users: UsersType[]) => {
  return {
    type: SET_USERS,
    users
  } as const
}

export const setCurrentPage = (currentPage: number) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  } as const
}

export const setTotalUsersCount = (totalCount: number) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalCount
  } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching
  } as const
}

export default usersReducer;
