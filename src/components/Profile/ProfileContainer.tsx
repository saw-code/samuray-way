import React from "react";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";


type MapStateToPropsType = {
  profile: any
}

type MapDispatchToPropsType = {
  setUserProfile: (profile: any) => void
}

type RouterParamsType = {
  userId: string,
}

export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<RouterParamsType> & ProfileContainerPropsType


export class ProfileContainer extends React.Component<PropsType> {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if(!userId) {
      userId = '2'
    }

    profileAPI.getProfile(userId).then(data => {
          this.props.setUserProfile(data)
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


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile
  }
}

// благодаря withRouter мы получаем доступ к urk и его параметрам. в App указали какой параметр передаем в profile
// а именно profile/:userId
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,  {setUserProfile})(WithUrlDataContainerComponent);

