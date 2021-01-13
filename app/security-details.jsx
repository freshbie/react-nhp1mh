import * as React from "react";

import { Field } from "@progress/kendo-react-form";

import { FormInput, FormRadioGroup, FormCheckbox } from "./form-components.jsx";

import { requiredValidator } from "./validators.jsx";

import { resident } from "./data.jsx";

export const SecurityDetails = (
  <div>
    <Field
      key={"veh_sec"}
      id={"veh_sec"}
      name={"veh_sec"}
      label={"Will you use your vehicle as security ?"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={resident}
      validator={requiredValidator}
    />
    <br />
    <p>
      <b>Please provide your vehicle details</b>
    </p>
    <Field
      key={"veh_reg"}
      id={"veh_reg"}
      name={"veh_reg"}
      label={"Vehicle Registration"}
      component={FormInput}
    />
    <Field
      key={"veh_mod"}
      id={"veh_mod"}
      name={"veh_mod"}
      label={"Vehicle Model"}
      component={FormInput}
    />
    <Field
      key={"veh_make"}
      id={"veh_make"}
      name={"veh_make"}
      label={"Vehicle Make"}
      component={FormInput}
    />
    <Field
      key={"veh_year"}
      id={"veh_year"}
      name={"veh_year"}
      label={"Vehicle Year"}
      component={FormInput}
    />
    <br />
    <p>
      <b>Privacy Act Declaration</b>
    </p>
    <p>
      Authorisation by Applicant(s) and Guarantor(s) for use and disclosure of
      information. Pursuant to the Privacy Act 1993, I/We acknowledge that:
    </p>
    <Field
      key={"1_p"}
      id={"1_p"}
      name={"1_p"}
      component={FormCheckbox}
      label={
        "1. I/We understand that the information will be used to assess my/our credit worthiness and financial position, to process my/our application."
      }
    />
    <Field
      key={"2_p"}
      id={"2_p"}
      name={"2_p"}
      component={FormCheckbox}
      label={
        "2. By signing this application, I/we authorise First Credit Union to: (I) make enquiries about me/us and disclose and obtain any additional information First Credit Union considers necessary, including checking driver licence/s information with LTSA, (II) disclose my/our personal information (including payment default information) to potential or actual assignees, to insurers and other third parties that my have or may intend to take security over any of my/our assets, to credit rating and credit reporting agencies and any other person that First Credit Union may appoint to collect any oustanding debt from me/us."
      }
    />
    <Field
      key={"3_p"}
      id={"3_p"}
      name={"3_p"}
      component={FormCheckbox}
      label={
        "3. I/We declare that the information I/we have provided in this application is true and correct."
      }
    />
    <Field
      key={"4_p"}
      id={"4_p"}
      name={"4_p"}
      component={FormCheckbox}
      label={
        "4. I/We understand that for First Credit Union to comply with its AML/CFT obligations I/we agree to our identification, full name, address and date of birth to be verified through a third party such as CloudCheck Verify."
      }
    />
    <Field
      key={"5_p"}
      id={"5_p"}
      name={"5_p"}
      component={FormCheckbox}
      label={
        "5. I/We understand that First Credit Union will meet its Privacy obligations in the collection, use and storage of all my/our personal information."
      }
    />
    <br />
    <Field
      key={"occasional"}
      id={"occasional"}
      name={"occasional"}
      component={FormCheckbox}
      label={
        "We'd like to keep you informed about what's happening at First Credit Union with occasional emails. Please tick this box if you'd like to be included on our email list. We will not share your details, and you can unsubscribe from these at any time."
      }
    />
    <Field
      key={"loan_protect"}
      id={"loan_protect"}
      name={"loan_protect"}
      component={FormCheckbox}
      label={
        "I am interested in protecting my loan against unforseen events such as disability or sickness."
      }
    />
  </div>
);
