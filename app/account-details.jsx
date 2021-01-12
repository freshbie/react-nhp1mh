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
      hint={"Employeer Name"}
      component={FormInput}
      validator={driverValidator}
    />
    <Field
      key={"employer_address"}
      id={"employer_address"}
      name={"employer_address"}
      hint={"Employer Address"}
      component={FormInput}
      validator={addressValidator}
    />
    <Field
      key={"employer_suburb"}
      id={"employer_suburb"}
      name={"employer_suburb"}
      hint={"Employer Suburb"}
      component={FormInput}
      validator={addressValidator}
    />
    <Field
      key={"emp_duration"}
      id={"emp_duration"}
      name={"emp_duration"}
      label={"How long have you been employed there ?"}
      component={FormInput}
      validator={driverValidator}
    />
    <br />
    <p>
      <b>Joint Applicant (if applicable)</b>
    </p>
    <Field
      key={"j_title"}
      id={"j_title"}
      name={"j_title"}
      label={"Title"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={title}
      validator={requiredValidator}
    />
    <Field
      key={"j_FirstName"}
      id={"j_FirstName"}
      name={"j_FirstName"}
      label={"First Name"}
      component={FormInput}
      validator={userNameValidator}
    />
    <Field
      key={"j_LastName"}
      id={"j_LastName"}
      name={"j_LastName"}
      label={"Last Name"}
      component={FormInput}
      validator={userNameValidator}
    />
    <Field
      key={"j_DOB"}
      id={"j_DOB"}
      name={"j_DOB"}
      label={"Date of Birth"}
      component={FormInput}
      type={"date"}
      validator={dobValidator}
    />
    <Field
      key={"j_email"}
      id={"j_email"}
      name={"j_email"}
      label={"Email"}
      hint={"Hint: Enter your personal email address."}
      type={"email"}
      component={FormInput}
      validator={emailValidator}
    />
    <Field
      key={"j_Address"}
      id={"j_Address"}
      name={"j_Address"}
      label={"What is your Home Address ?"}
      hint={"Street"}
      component={FormInput}
      validator={addressValidator}
    />
    <Field
      key={"j_suburb"}
      id={"j_suburb"}
      name={"j_suburb"}
      hint={"Suburb"}
      component={FormInput}
      validator={addressValidator}
    />
    <Field
      key={"j_postcode"}
      id={"j_postcode"}
      name={"j_postcode"}
      hint={"Post Code"}
      component={FormInput}
      validator={addressValidator}
    />
    <Field
      key={"j_resident"}
      id={"j_resident"}
      name={"j_resident"}
      label={"Are you a NZ Resident ?"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={resident}
      validator={requiredValidator}
    />
    <Field
      key={"j_driverlicence"}
      id={"j_driverlicence"}
      name={"j_driverlicence"}
      label={"What is your Driver Licence Number ?"}
      component={FormInput}
      validator={driverValidator}
    />
    <Field
      key={"j_lihold"}
      id={"j_lihold"}
      name={"j_lihold"}
      label={"What type of Licence do you hold ?"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={lihold}
      validator={requiredValidator}
    />
    <Field
      key={"j_children"}
      id={"j_children"}
      name={"j_children"}
      label={"How many dependent children do you have ?"}
      component={FormInput}
      validator={childValidator}
    />
    <Field
      key={"j_emp"}
      id={"j_emp"}
      name={"j_emp"}
      label={"Are you employed ?"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={emp}
      validator={requiredValidator}
    />
    <Field
      key={"j_occupation"}
      id={"j_occupation"}
      name={"j_occupation"}
      label={"What is your occupation ?"}
      component={FormInput}
      validator={driverValidator}
    />
    <Field
      key={"j_employer"}
      id={"j_employer"}
      name={"j_employer"}
      label={"Who is your employer ?"}
      hint={"Employeer Name"}
      component={FormInput}
      validator={driverValidator}
    />
    <Field
      key={"j_employer_address"}
      id={"j_employer_address"}
      name={"j_employer_address"}
      hint={"Employer Address"}
      component={FormInput}
      validator={addressValidator}
    />
    <Field
      key={"j_employer_suburb"}
      id={"j_employer_suburb"}
      name={"j_employer_suburb"}
      hint={"Employer Suburb"}
      component={FormInput}
      validator={addressValidator}
    />
    <Field
      key={"j_emp_duration"}
      id={"j_emp_duration"}
      name={"j_emp_duration"}
      label={"How long have you been employed there ?"}
      component={FormInput}
      validator={driverValidator}
    />
  </div>
);
