import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPostsContainer";

export function Profile() {

  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer />
    </div>
  )
}