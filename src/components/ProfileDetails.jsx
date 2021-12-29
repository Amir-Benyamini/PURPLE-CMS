import React from "react";
import { FormLayout, TextField, Subheading, TextStyle } from "@shopify/polaris";
import { observer } from "mobx-react";
import { toJS } from "mobx";

export const ProfileDetails = observer((props) => {
  const store = toJS(props.store);
  return (
    <div className="user-profile">
      <FormLayout>
        <Subheading>
          <TextStyle variation="strong">User Profile</TextStyle>
        </Subheading>

        <TextField label="Job Title" value={store.user.title} disabled="true" />
        <TextField
          label="Current Company"
          value={store.user.company}
          disabled="true"
        />
        <TextField
          label="About Myself"
          value={store.user.about}
          disabled="true"
          multiline={5}
        />
        <TextField
          className="phone-input"
          label="Phone Number"
          value={`${store.user.phone}`}
          disabled="true"
        />
      </FormLayout>
    </div>
  );
});
