import React from "react";
import ReactDOM from "react-dom";
import FieldSet from "./FieldSet";
import TextInput from "./TextInput";

it("renders checkboxes without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <FieldSet title="1 - Contact Information">
      <TextInput
        id="first-name"
        label="First Name"
        placeholder="Enter your first name"
      />
      <TextInput
        id="last-name"
        label="Last Name"
        placeholder="Enter your last name"
      />
    </FieldSet>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
