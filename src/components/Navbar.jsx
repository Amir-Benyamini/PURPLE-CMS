import React from "react";
import { Avatar } from "@shopify/polaris";
import { dummyProfile } from "../servises/dummy";
import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <div id="nav">
      <img
        className="logo"
        src="https://www.prpl.io/wp-content/uploads/2019/03/Group-9.png"
      />
      <Link to="/">Pofile Page</Link>
      <Link to="/cms">Edit Profile Page</Link>
      <Avatar source={`${dummyProfile.image}`} name={`${dummyProfile.name}`} />
    </div>
  );
}
