import * as React from "react";

import { Field } from "@progress/kendo-react-form";

import { FormInput, FormRadioGroup } from "./form-components.jsx";

import {
  userNameValidator,
  emailValidator,
  addressValidator,
  requiredValidator,
  phoneValidator,
  dobValidator
} from "./validators.jsx";

import { title } from "./data.jsx";

export const AccountDetails = (
  <div>
    <Field
      key={"title"}
      id={"title"}
      name={"title"}
      label={"Title"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={title}
      validator={requiredValidator}
    />
    <Field
      key={"FirstName"}
      id={"FirstName"}
      name={"FirstName"}
      label={"First Name"}
      component={FormInput}
      validator={userNameValidator}
    />
    <Field
      key={"LastName"}
      id={"LastName"}
      name={"LastName"}
      label={"Last Name"}
      component={FormInput}
      validator={userNameValidator}
    />
    <Field
      key={"DOB"}
      id={"DOB"}
      name={"DOB"}
      label={"Date of Birth"}
      component={FormInput}
      type={"date"}
      validator={dobValidator}
    />
    <Field
      key={"email"}
      id={"email"}
      name={"email"}
      label={"Email"}
      hint={"Hint: Enter your personal email address."}
      type={"email"}
      component={FormInput}
      validator={emailValidator}
    />
    <Field
      key={"Address"}
      id={"Address"}
      name={"Address"}
      label={"Address"}
      component={FormInput}
      validator={addressValidator}
    />
    <Field
      key={"userName"}
      id={"userName"}
      name={"userName"}
      label={"Phone"}
      component={FormInput}
      validator={phoneValidator}
    />
  </div>
);
