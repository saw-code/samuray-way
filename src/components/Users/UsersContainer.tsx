import React from 'react';
import {connect} from "react-redux";
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
import axios from "axios";
import {Users} from "./Users";

class UsersContainer extends React.Component<UsersContainerPropsType> {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  // в URL вставили pageNumber потому что нам нужно чтобы запрос был сразу на новый стейт, а не на старый
  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return <Users
      users={this.props.users}
      pageSize={this.props.pageSize}
      totalUsersCount={this.props.totalUsersCount}
      currentPage={this.props.currentPage}
      subscribe={this.props.subscribe}
      unsubscribe={this.props.unsubscribe}
      onPageChanged={this.onPageChanged}

    />
  }
}

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

export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
