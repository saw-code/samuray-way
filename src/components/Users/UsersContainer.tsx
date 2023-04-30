import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {setUsersAC, subscribeAC, unsubscribeAC, UsersType} from "../../redux/users-reducer";


type MapStateToPropsType = {
  users: UsersType[]
}

type MapDispatchToPropsType = {
  subscribe: (userId: number) => void
  unsubscribe: (userId: number) => void
  setUsers: (users: UsersType[]) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users
  }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    subscribe: (userId: number) => {dispatch(subscribeAC(userId))},
    unsubscribe: (userId: number) => {dispatch(unsubscribeAC(userId))},
    setUsers: (users: UsersType[]) => {dispatch(setUsersAC(users))}
  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);