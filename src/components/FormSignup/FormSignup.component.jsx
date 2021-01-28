import React, { useState } from "react";
import validateSignUpInfo from "../../utils/validateSignUpInfo.utils";
import useSignUp from "../../hooks/useSignUp.hooks";
import {
  SignFormContainer,
  SignUpHeading,
  Form,
  FormHeading,
  InputContainer,
  FormInput,
  FormLabel,
  InputErr,
  ShowPasswordContainer,
  ShowPasswordLabel,
  SubmitBtn,
  TAndCContainer,
  TAndCLabel,
  TAndCLink,
  LoginLinkContainer,
  LoginLink,
} from "./FormSignup.styles";
const FormSignup = ({ submitForm, history, setUser }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleChange, handleSubmit, values } = useSignUp(
    submitForm,
    validateSignUpInfo
  );
  return (
    <SignFormContainer>
      <SignUpHeading>
        Welcome! <br /> Sign Up to continue
      </SignUpHeading>
      <Form onSubmit={handleSubmit} noValidate>
        <FormHeading>Create account</FormHeading>
        <InputContainer>
          <FormLabel>
            <FormInput
              type="text"
              name="username"
              placeholder="Name"
              value={values.username}
              onChange={handleChange}
              required
            />
          </FormLabel>
          <InputErr>{values.nameError}</InputErr>
        </InputContainer>

        <InputContainer>
          <FormLabel>
            <FormInput
              type="email"
              name="email"
              placeholder="Your email address"
              value={values.email}
              onChange={handleChange}
              required
            />
          </FormLabel>
          <InputErr>{values.emailError}</InputErr>
        </InputContainer>
        <InputContainer>
          <FormLabel>
            <FormInput
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create Password"
              value={values.password}
              onChange={handleChange}
              required
            />
          </FormLabel>
          <InputErr>{values.passwordError}</InputErr>
        </InputContainer>
        <InputContainer>
          <FormLabel>
            <FormInput
              type={showPassword ? "text" : "password"}
              name="password2"
              placeholder="Confirm Password"
              value={values.password2}
              onChange={handleChange}
              required
            />
          </FormLabel>
          <InputErr>{values.passwordError}</InputErr>
        </InputContainer>
        <ShowPasswordContainer>
          <input
            type="checkbox"
            id="signup-show--password"
            onClick={() => setShowPassword(!showPassword)}
          />
          <ShowPasswordLabel htmlFor="signup-show--password">
            Show Password
          </ShowPasswordLabel>
        </ShowPasswordContainer>

        <SubmitBtn
          type="submit"
          onClick={() => {
            if (values.username) {
              setUser({
                username: values.username,
              });
            }
          }}
        >
          Sign Up
        </SubmitBtn>
        <TAndCContainer>
          <input type="checkbox" id="signup-tc" required />
          <TAndCLabel htmlFor="signup-tc">
            By creating account or logging in , you agree to BookMyMum's{" "}
            <TAndCLink>Condition of Use</TAndCLink> and{" "}
            <TAndCLink>policy</TAndCLink>
          </TAndCLabel>
        </TAndCContainer>
      </Form>
      <LoginLinkContainer>
        Already have an account? <LoginLink to="/SignIn">Log In</LoginLink>
      </LoginLinkContainer>
    </SignFormContainer>
  );
};

export default FormSignup;
