import * as React from "react";

import { Field } from "@progress/kendo-react-form";

import { FormInput, FormRadioGroup } from "./form-components.jsx";

import {
  userNameValidator,
  emailValidator,
  addressValidator,
  requiredValidator,
  phoneValidator,
  dobValidator,
  driverValidator,
  childValidator
} from "./validators.jsx";

import { title, resident, lihold, emp } from "./data.jsx";

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
      label={"What is your Home Address ?"}
      hint={"Street"}
      component={FormInput}
      validator={addressValidator}
    />
    <Field
      key={"suburb"}
      id={"suburb"}
      name={"suburb"}
      hint={"Suburb"}
      component={FormInput}
      validator={addressValidator}
    />
    <Field
      key={"postcode"}
      id={"postcode"}
      name={"postcode"}
      hint={"Post Code"}
      component={FormInput}
      validator={addressValidator}
    />
    <Field
      key={"phone"}
      id={"phone"}
      name={"phone"}
      label={"What are your phone numbers ? (Please provide atleast two)"}
      hint={"Hint: Your personal number"}
      component={FormInput}
      validator={phoneValidator}
    />
    <Field
      key={"a_phone"}
      id={"a_phone"}
      name={"a_phone"}
      hint={"Hint: Your Home or Work number"}
      component={FormInput}
      validator={phoneValidator}
    />
    <Field
      key={"resident"}
      id={"resident"}
      name={"resident"}
      label={"Are you a NZ Resident ?"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={resident}
      validator={requiredValidator}
    />
    <Field
      key={"driverlicence"}
      id={"driverlicence"}
      name={"driverlicence"}
      label={"What is your Driver Licence Number ?"}
      component={FormInput}
      validator={driverValidator}
    />
    <Field
      key={"lihold"}
      id={"lihold"}
      name={"lihold"}
      label={"What type of Licence do you hold ?"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={lihold}
      validator={requiredValidator}
    />
    <Field
      key={"children"}
      id={"children"}
      name={"children"}
      label={"How many dependent children do you have ?"}
      component={FormInput}
      validator={childValidator}
    />
    <Field
      key={"emp"}
      id={"emp"}
      name={"emp"}
      label={"Are you employed ?"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={emp}
      validator={requiredValidator}
    />
    <Field
      key={"occupation"}
      id={"occupation"}
      name={"occupation"}
      label={"What is your occupation ?"}
      component={FormInput}
      validator={driverValidator}
    />
    <Field
      key={"employer"}
      id={"employer"}
      name={"employer"}
      label={"Who is your employer ?"}
      component={FormInput}
      validator={driverValidator}
    />
  </div>
);
