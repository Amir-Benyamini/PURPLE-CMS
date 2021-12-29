import React from "react";
import { ProfileDetails } from "./ProfileDetails";
import { ProfileAvatar } from "./ProfileAvatar";

export function ProfileScreen(props) {
  return (
    <div id="grid-container">
      <ProfileAvatar store={props.store} className="left" />
      <ProfileDetails store={props.store} className="right" />
    </div>
  );
}
