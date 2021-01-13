import * as React from "react";

import { Field } from "@progress/kendo-react-form";

import { FormInput, FormDropDownList } from "./form-components.jsx";

import {
  nameValidator,
  requiredValidator,
  driverValidator
} from "./validators.jsx";

import { cycle, purpose } from "./data.jsx";

export const LoanDetails = (
  <div>
    <br />
    <p>
      <b>Loan Details</b>
    </p>
    <Field
      key={"amount"}
      id={"amount"}
      name={"amount"}
      label={"How much would you like to borrow ?"}
      component={FormInput}
      validator={driverValidator}
    />
    <Field
      key={"term"}
      id={"term"}
      name={"term"}
      label={"How much can you regularly repay?"}
      component={FormDropDownList}
      data={cycle}
      validator={requiredValidator}
    />
    <Field
      key={"repay"}
      id={"repay"}
      name={"repay"}
      placeholder={"Please enter the amount"}
      component={FormInput}
      validator={driverValidator}
    />
    <Field
      key={"purpose"}
      id={"purpose"}
      name={"purpose"}
      label={"What is the purpose of this loan?"}
      component={FormDropDownList}
      data={purpose}
      validator={requiredValidator}
    />
    <Field
      key={"other_purpose"}
      id={"other_purpose"}
      name={"other_purpose"}
      placeholder={"If other, please state the reason"}
      component={FormInput}
      validator={driverValidator}
    />
    <br />
    <p>
      <b>Please fill in the table below</b>
    </p>
    <br />
    <p>
      <b>Income</b>
    </p>
    <Field
      key={"income_cycle"}
      id={"income_cycle"}
      name={"income_cycle"}
      label={"Net income after tax"}
      component={FormDropDownList}
      data={cycle}
      validator={requiredValidator}
    />
    <Field
      key={"income"}
      id={"income"}
      name={"income"}
      placeholder={"Amount $"}
      component={FormInput}
      validator={driverValidator}
    />
    <Field
      key={"j_income_cycle"}
      id={"j_income_cycle"}
      name={"j_income_cycle"}
      label={"Joint applicant's income"}
      component={FormDropDownList}
      data={cycle}
      validator={requiredValidator}
    />
    <Field
      key={"j_income"}
      id={"j_income"}
      name={"j_income"}
      placeholder={"Amount $"}
      component={FormInput}
      validator={driverValidator}
    />
    <br />
    <p>
      <b>Total Income(Monthly)</b>
    </p>
    <Field
      key={"t_income"}
      id={"t_income"}
      name={"t_income"}
      placeholder={"Amount $"}
      component={FormInput}
      validator={driverValidator}
    />
  </div>
);
