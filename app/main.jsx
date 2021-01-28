import * as React from "react";
import * as ReactDOM from "react-dom";

import { Form, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { Stepper } from "@progress/kendo-react-layout";

import { AccountDetails } from "./account-details.jsx";
import { LoanDetails } from "./loan-details.jsx";
import { SecurityDetails } from "./security-details.jsx";

const stepPages = [AccountDetails, LoanDetails, SecurityDetails];

export const App = () => {
  const [step, setStep] = React.useState(0);
  const [formState, setFormState] = React.useState({});
  const [steps, setSteps] = React.useState([
    { label: "Personal", isValid: undefined },
    { label: "Loan", isValid: undefined },
    { label: "Security", isValid: undefined }
  ]);

  const lastStepIndex = steps.length - 1;
  const isLastStep = lastStepIndex === step;

  const onStepSubmit = React.useCallback(
    event => {
      const { isValid, values } = event;

      const currentSteps = steps.map((currentStep, index) => ({
        ...currentStep,
        isValid: index === step ? isValid : currentStep.isValid
      }));

      setSteps(currentSteps);

      if (!isValid) {
        return;
      }

      setStep(() => Math.min(step + 1, lastStepIndex));
      setFormState(values);

      if (isLastStep) {
        document.getElementById("loanapp").innerHTML = JSON.stringify(values);
      }
    },
    [step, steps, setSteps, setStep, setFormState, isLastStep]
  );

  const onPrevClick = React.useCallback(
    event => {
      event.preventDefault();
      setStep(() => Math.max(step - 1, 0));
    },
    [step, setStep]
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <Stepper value={step} items={steps} />
      <Form
        initialValues={formState}
        onSubmitClick={onStepSubmit}
        render={formRenderProps => (
          <div style={{ alignSelf: "center" }}>
            <FormElement style={{ width: 600 }}>
              {stepPages[step]}
              <span
                style={{ marginTop: "40px" }}
                className={"k-form-separator"}
              />
              <div
                style={{
                  justifyContent: "space-between",
                  alignContent: "center"
                }}
                className={"k-form-buttons k-buttons-end"}
              >
                <span style={{ alignSelf: "center", visibility: "hidden" }}>
                  Step {step + 1} of 3
                </span>
                <div>
                  {step !== 0 ? (
                    <Button
                      style={{
                        marginRight: "16px",
                        backgroundColor: "#BBBB14",
                        color: "#000000"
                      }}
                      onClick={onPrevClick}
                    >
                      Previous
                    </Button>
                  ) : (
                    undefined
                  )}
                  <Button
                    primary={true}
                    disabled={!formRenderProps.allowSubmit}
                    onClick={formRenderProps.onSubmit}
                    style={{ backgroundColor: "#BBBB14", color: "#000000" }}
                  >
                    {isLastStep ? "Submit" : "Next"}
                  </Button>
                </div>
              </div>
            </FormElement>
          </div>
        )}
      />
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("my-app"));
