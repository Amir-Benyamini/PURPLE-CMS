import React from "react";
import { Card, Avatar, Heading, TextStyle, Subheading } from "@shopify/polaris";
import { dummyProfile } from "../servises/dummy";
import { observer } from "mobx-react";
import { toJS } from "mobx";
export const ProfileAvatar = observer((props) => {
  const store = toJS(props.store);
  return (
    <div className="avatar-card">
      <Card sectioned>
        <Avatar source={`${store.user.imageUrl}`} name={`${store.user.name}`} />
        <Heading element="h4">
          <TextStyle variation="strong">{store.user.name}</TextStyle>
        </Heading>
        <Subheading>
          <TextStyle variation="subdued">{store.user.email}</TextStyle>
        </Subheading>
      </Card>
    </div>
  );
});
