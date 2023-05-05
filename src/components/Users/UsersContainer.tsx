import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  subscribeAC,
  unsubscribeAC,
  UsersType
} from "../../redux/users-reducer";


type MapStateToPropsType = {
  users: UsersType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
}

type MapDispatchToPropsType = {
  subscribe: (userId: number) => void
  unsubscribe: (userId: number) => void
  setUsers: (users: UsersType[]) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (totalCount: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    subscribe: (userId: number) => {dispatch(subscribeAC(userId))},
    unsubscribe: (userId: number) => {dispatch(unsubscribeAC(userId))},
    setUsers: (users: UsersType[]) => {dispatch(setUsersAC(users))},
    setCurrentPage: (currentPage: number) => {dispatch(setCurrentPageAC(currentPage))},
    setTotalUsersCount: (totalCount: number) => {dispatch(setTotalUsersCountAC(totalCount))}
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);