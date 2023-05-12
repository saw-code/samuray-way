import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  // withCredentials - это запрос на авторизацию (вроде как)
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
      .then(response => {
        if (response.data.resultCode === 0) {
          let {email, id, login} = response.data.data
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