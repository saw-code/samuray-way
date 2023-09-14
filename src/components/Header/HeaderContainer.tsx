import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {headerAPI} from "../../api/api";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  // withCredentials - это запрос на авторизацию (вроде как)
  componentDidMount() {
    headerAPI.getHeader()
      .then(data => {
        if (data.resultCode === 0) {
          let {email, id, login} = data.data
          this.props.setAuthUserData(id, email, login)
        }
      })
  }

  render() {
    return <Header {...this.props}/>
  }
}
type MapStateToPropsType = {
  login: string
  isAuth: boolean
}

type MapDispatchToPropsType = {
  setAuthUserData: (userId: string, email: string, login: string) => void
}

export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.data.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)