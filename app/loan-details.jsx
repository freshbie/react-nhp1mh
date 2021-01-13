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
    <br />
    <p>
      <b>What do you own(Assets) ?</b>
    </p>
    <Field
      key={"a_home"}
      id={"a_home"}
      name={"a_home"}
      label={"Home"}
      placeholder={"Estimated Value $"}
      component={FormInput}
      validator={driverValidator}
    />
    <Field
      key={"a_household"}
      id={"a_household"}
      name={"a_household"}
      label={"Household Contents"}
      placeholder={"Estimated Value $"}
      component={FormInput}
      validator={driverValidator}
    />
    <Field
      key={"a_motor"}
      id={"a_motor"}
      name={"a_motor"}
      label={"Motor Vehicle/s"}
      placeholder={"Estimated Value $"}
      component={FormInput}
      validator={driverValidator}
    />
    <Field
      key={"a_savings"}
      id={"a_savings"}
      name={"a_savings"}
      label={"Savings"}
      placeholder={"Estimated Value $"}
      component={FormInput}
      validator={driverValidator}
    />
    <br />
    <p>
      <b>Total Assets</b>
    </p>
    <Field
      key={"t_assets"}
      id={"t_assets"}
      name={"t_assets"}
      placeholder={"Estimated Value $"}
      placeholder={"Estimated Value $"}
      component={FormInput}
      validator={driverValidator}
    />
    <br />
    <p>
      <b>Expenditure</b>
    </p>
    <Field
      key={"rent_cycle"}
      id={"rent_cycle"}
      name={"rent_cycle"}
      label={"Mortage/Rent/Board"}
      component={FormDropDownList}
      data={cycle}
      validator={requiredValidator}
    />
    <Field
      key={"rent"}
      id={"rent"}
      name={"rent"}
      placeholder={"Amount $"}
      component={FormInput}
      validator={driverValidator}
    />
    <Field
      key={"loan_cycle"}
      id={"loan_cycle"}
      name={"loan_cycle"}
      label={"Other loans"}
      component={FormDropDownList}
      data={cycle}
      validator={requiredValidator}
    />
    <Field
      key={"o_loans"}
      id={"o_loans"}
      name={"o_loans"}
      placeholder={"Amount $"}
      component={FormInput}
      validator={driverValidator}
    />
    <Field
      key={"Insurances_cycle"}
      id={"Insurances_cycle"}
      name={"Insurances_cycle"}
      label={"Insurances"}
      component={FormDropDownList}
      data={cycle}
      validator={requiredValidator}
    />
    <Field
      key={"Insurances"}
      id={"Insurances"}
      name={"Insurances"}
      placeholder={"Amount $"}
      component={FormInput}
      validator={driverValidator}
    />
    <Field
      key={"cpay_cycle"}
      id={"cpay_cycle"}
      name={"cpay_cycle"}
      label={"Credit/Store Card Payments"}
      component={FormDropDownList}
      data={cycle}
      validator={requiredValidator}
    />
    <Field
      key={"cpay"}
      id={"cpay"}
      name={"cpay"}
      placeholder={"Amount $"}
      component={FormInput}
      validator={driverValidator}
    />
    <Field
      key={"hp_cycle"}
      id={"hp_cycle"}
      name={"hp_cycle"}
      label={"Hire Purchase Repayments"}
      component={FormDropDownList}
      data={cycle}
      validator={requiredValidator}
    />
    <Field
      key={"hpay"}
      id={"hpay"}
      name={"hpay"}
      placeholder={"Amount $"}
      component={FormInput}
      validator={driverValidator}
    />
    <Field
      key={"Familycare_cycle"}
      id={"Familycare_cycle"}
      name={"Familycare_cycle"}
      label={"Family support or child care"}
      component={FormDropDownList}
      data={cycle}
      validator={requiredValidator}
    />
    <Field
      key={"familycare"}
      id={"familycare"}
      name={"familycare"}
      placeholder={"Amount $"}
      component={FormInput}
      validator={driverValidator}
    />
    <Field
      key={"ppp_cycle"}
      id={"ppp_cycle"}
      name={"ppp_cycle"}
      label={"Power/Phone/Petrol"}
      component={FormDropDownList}
      data={cycle}
      validator={requiredValidator}
    />
    <Field
      key={"ppp"}
      id={"ppp"}
      name={"ppp"}
      placeholder={"Amount $"}
      component={FormInput}
      validator={driverValidator}
    />
    <Field
      key={"food_cycle"}
      id={"food_cycle"}
      name={"food_cycle"}
      label={"Food"}
      component={FormDropDownList}
      data={cycle}
      validator={requiredValidator}
    />
    <Field
      key={"food"}
      id={"food"}
      name={"food"}
      placeholder={"Amount $"}
      component={FormInput}
      validator={driverValidator}
    />
    <br />
    <p>
      <b>Total Expenditure(Monthly)</b>
    </p>
    <Field
      key={"t_expenditure"}
      id={"t_expenditure"}
      name={"t_expenditure"}
      placeholder={"Amount $"}
      component={FormInput}
      validator={driverValidator}
    />
    <br />
    <p>
      <b>What do you owe(Liabilities) ?</b>
    </p>
    <Field
      key={"a_home"}
      id={"a_home"}
      name={"a_home"}
      label={"First Mortgage"}
      placeholder={"Estimated Value $"}
      component={FormInput}
      validator={driverValidator}
    />
    <Field
      key={"a_household"}
      id={"a_household"}
      name={"a_household"}
      label={"Motor Vehicles"}
      placeholder={"Estimated Value $"}
      component={FormInput}
      validator={driverValidator}
    />
    <Field
      key={"a_motor"}
      id={"a_motor"}
      name={"a_motor"}
      label={"Overdrafts"}
      placeholder={"Estimated Value $"}
      component={FormInput}
      validator={driverValidator}
    />
    <Field
      key={"a_savings"}
      id={"a_savings"}
      name={"a_savings"}
      label={"Credit Card Debt"}
      placeholder={"Estimated Value $"}
      component={FormInput}
      validator={driverValidator}
    />
    <Field
      key={"a_home"}
      id={"a_home"}
      name={"a_home"}
      label={"Store cards/Hire purchases"}
      placeholder={"Estimated Value $"}
      component={FormInput}
      validator={driverValidator}
    />
    <Field
      key={"a_household"}
      id={"a_household"}
      name={"a_household"}
      label={"Student Loan"}
      placeholder={"Estimated Value $"}
      component={FormInput}
      validator={driverValidator}
    />
    <Field
      key={"a_motor"}
      id={"a_motor"}
      name={"a_motor"}
      label={"Personal Loan/s"}
      placeholder={"Estimated Value $"}
      component={FormInput}
      validator={driverValidator}
    />
    <br />
    <p>
      <b>Total Liabilities</b>
    </p>
    <Field
      key={"t_assets"}
      id={"t_assets"}
      name={"t_assets"}
      placeholder={"Estimated Value $"}
      placeholder={"Estimated Value $"}
      component={FormInput}
      validator={driverValidator}
    />
  </div>
);
