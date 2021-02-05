import React from "react";
import validateForget from "../../utils/validateForget.utils";
import useForget from "../../hooks/useForget.hooks";
//import "./FormForgot.styles.scss";
import { FormContainer, FormHeader, FormCaption, Form, FormInputContainer, FormInputField, SubmitFormButton, Back, BackLink } from "./FormForgot.styles";

const FormForgot = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForget(
    submitForm,
    validateForget
  );

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit} noValidate>
        <FormHeader>Password Assistance</FormHeader>
        <FormCaption>Enter the e-mail address associated with your The Circle account.</FormCaption>
        <FormInputContainer>

          <FormInputField
            className="form-input"
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </FormInputContainer>

        <SubmitFormButton className="form-input-btn" type="submit">
          Continue
        </SubmitFormButton>
        <Back>
          <BackLink href="/">Back</BackLink>
        </Back>
        
      </Form>
    </FormContainer>
  );
};

export default FormForgot;
