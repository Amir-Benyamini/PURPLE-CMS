import React, { useState, useCallback } from "react";
import {
  FormLayout,
  TextField,
  Subheading,
  TextStyle,
  Stack,
  DropZone,
  Thumbnail,
  Caption,
  Banner,
  List,
  Form,
  Button,
} from "@shopify/polaris";
const userActions = require("../actions/user");

export const ProfileCMS = (props) => {
  const [values, setValues] = useState({
    title: "",
    company: "",
    about: "",
    phone: "",
  });
  const [phoneErrorMessage, setPhoneErrorMessage] = useState(undefined);
  const { title, company, about, phone } = values;
  const userId = props.store.user._id;
  const updateInput = (value, name) => {
    const updatedValues = { ...values };
    updatedValues[name] = value;
    setValues(updatedValues);
  };
  const updateFilter = (valObj) => {
    let updateObj = { ...valObj };
    const keys = Object.keys(updateObj);
    keys.forEach((key) => {
      if (updateObj[key] === "") {
        delete updateObj[key];
      }
    });
    return updateObj;
  };
  const handleSubmit = () => {
    const update = updateFilter(values);
    userActions.updateUser(userId, update);
    setValues({ title: "", company: "", about: "", phone: "" });
  };
  const [files, setFiles] = useState([]);
  const [rejectedFiles, setRejectedFiles] = useState([]);
  const hasError = rejectedFiles.length > 0;

  const handleDrop = useCallback(
    (_droppedFiles, acceptedFiles, rejectedFiles) => {
      setFiles((files) => [...files, ...acceptedFiles]);
      setRejectedFiles(rejectedFiles);
    },
    []
  );

  const validatePhoneNumber = (value) => {
    const isPhoneValid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
      value
    );

    setPhoneErrorMessage(!isPhoneValid && "Phone is not valid");
  };

  const fileUpload = !files.length && <DropZone.FileUpload />;
  const uploadedFiles = files.length > 0 && (
    <Stack vertical>
      {files.map((file, index) => (
        <Stack alignment="center" key={index}>
          <Thumbnail
            size="small"
            alt={file.name}
            source={window.URL.createObjectURL(file)}
          />
          <div>
            {file.name} <Caption>{file.size} bytes</Caption>
          </div>
        </Stack>
      ))}
    </Stack>
  );

  const errorMessage = hasError && (
    <Banner
      title="The following images couldn’t be uploaded:"
      status="critical"
    >
      <List type="bullet">
        {rejectedFiles.map((file, index) => (
          <List.Item key={index}>
            {`"${file.name}" is not supported. File type must be .gif, .jpg, .png or .svg.`}
          </List.Item>
        ))}
      </List>
    </Banner>
  );
  return (
    <div className="user-profile">
      <Form onSubmit={handleSubmit}>
        <FormLayout>
          <Subheading>
            <TextStyle variation="strong">User CMS</TextStyle>
          </Subheading>
          <Stack vertical>
            {errorMessage}
            <DropZone accept="image/*" type="image" onDrop={handleDrop}>
              {uploadedFiles}
              {fileUpload}
            </DropZone>
          </Stack>
          <TextField
            label="Job Title"
            value={title}
            onChange={(e) => updateInput(e, "title")}
            type="text"
            maxLength={20}
          />
          <TextField
            label="Current Company"
            value={company}
            onChange={(e) => updateInput(e, "company")}
            type="text"
            maxLength={20}
          />
          <TextField
            label="About Myself"
            value={about}
            multiline={5}
            onChange={(e) => updateInput(e, "about")}
            type="text"
          />
          <TextField
            className="phone-input"
            label="Phone Number"
            value={phone}
            onChange={(e) => {
              updateInput(e, "phone");
              validatePhoneNumber(e);
            }}
            autoComplete="off"
            type="phone"
            error={phoneErrorMessage}
            //onBlur={() => validatePhoneNumber(phone)}
          />
          <Button submit>Save</Button>
        </FormLayout>
      </Form>
    </div>
  );
};
