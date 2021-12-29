import React from "react";
import { Avatar } from "@shopify/polaris";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { toJS } from "mobx";

export const Navbar = observer((props) => {
  const store = toJS(props.store);
  return (
    <div id="nav">
      <img
        className="logo"
        src="https://www.prpl.io/wp-content/uploads/2019/03/Group-9.png"
      />
      <Link to="/">Pofile Page</Link>
      <Link to="/cms">Edit Profile Page</Link>
      <Avatar source={`${store.user.imageUrl}`} name={`${store.user.name}`} />
    </div>
  );
});
