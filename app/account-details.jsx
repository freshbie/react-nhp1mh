import * as React from "react";

import { Field } from "@progress/kendo-react-form";

import { FormInput, FormUpload } from "./form-components.jsx";

import {
  userNameValidator,
  emailValidator,
  passwordValidator
} from "./validators.jsx";

export const AccountDetails = (
  <div>
    <Field
      key={"userName"}
      id={"userName"}
      name={"First Name"}
      label={"First Name"}
      component={FormInput}
      validator={userNameValidator}
    />
    <Field
      key={"userName"}
      id={"userName"}
      name={"userName"}
      label={"Last Name"}
      component={FormInput}
      validator={userNameValidator}
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
      key={"password"}
      id={"password"}
      name={"password"}
      label={"Address"}
      type={"password"}
      component={FormInput}
      validator={passwordValidator}
    />
    <Field
      key={"userName"}
      id={"userName"}
      name={"userName"}
      label={"Phone"}
      component={FormInput}
      validator={userNameValidator}
    />
  </div>
);
