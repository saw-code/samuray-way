import React from "react";
import axios from "axios";
import {UsersType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {setUserProfile} from "../../redux/profile-reducer";

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile}/>
      </div>
    )
  }
}

type MapStateToPropsType = {
  profile: any
}

type MapDispatchToPropsType = {
  setUserProfile: (profile: any) => void
}

export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile
  }
}


export default connect(mapStateToProps,  {setUserProfile})(ProfileContainer);

