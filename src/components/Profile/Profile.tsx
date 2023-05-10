import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";

type ProfilePropsType = {
  profile: any
  setUserProfile: (profile: any) => void
}

export function Profile(props: ProfilePropsType) {

  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </div>
  )
}