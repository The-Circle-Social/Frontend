//** Package Imports
import React, { useState } from "react";
//** utils Imports
//* For Email and Password Verification
import Verification from "../../utils/Verification.utils";
import { InputErr } from "../FormSignup/FormSignup.styles";
//** Styles Imports
import {
  SignInFormContainer,
  Form,
  SignInFormHeading,
  ShowCheckboxDiv,
  ShowCheckbox,
  ForgotPass,
  ForgotLink,
  SubmitFormButton,
  SignUpContainer,
  SignUpText,
  SignUpLink,
  FormInputDiv,
  FormEmailInput,
  FormPassInput,
} from "./FormSignIn.styles";

//import "./FormSignIn.styles.scss";

const FormSignin = ({ handleSubmit }) => {
  //- Boolean for if user wants to show the password or hide the password
  const [showPassword, setShowPassword] = useState(false);
  //- Username object for errors(if any)(by default all errors are logged) in username field and username field's value
  const [email, setEmail] = useState({
    value: "",
    errors: {
      syntax: true,
    },
  });
  //- Password object for errors(if any)(by default all errors are logged) in password field and password field's value
  const [password, setPassword] = useState({
    value: "",
    errors: {
      lowercase: true,
      uppercase: true,
      length: true,
      symbol: true,
    },
  });
  //- This function is called when user change any field value
  //- Params:event,type of field, and setFunc of ibject associated with it
  const onInputChange = ({ target }, type, setFunc) => {
    //- This function is called when field value verification is done
    //- Params: errors
    //- Stores errors in the error property of the field object associated with type of field and also changed value of field
    const handleChange = (errors) => setFunc({ errors, value: target.value });
    //- Calling Verification utils for verification of type(param) of field
    Verification(type, target.value, handleChange, password.value);
  };
  return (
    //* SignIn Form Container
    <SignInFormContainer>
      {/* Sign In Form */}
      <Form
        noValidate
        onSubmit={(event) => handleSubmit(event, password, email)}
      >
        {/* Sign In Form Heading */}
        <SignInFormHeading>
          Welcome!
          <br />
          Log In to continue
        </SignInFormHeading>
        {/* Email field Container */}
        <FormInputDiv>
          {/* Email field*/}
          <FormEmailInput
            type="email"
            name="email"
            placeholder="Email"
            value={email.value}
            onChange={(event) => onInputChange(event, "email", setEmail)}
          />
          {/* If email is invalid then display error message */}
          {email.errors.syntax && <InputErr>Invalid Email</InputErr>}
        </FormInputDiv>
        {/* Password field Container*/}
        <FormInputDiv>
          {/* Password field*/}
          <FormPassInput
            type={!showPassword ? "password" : "text"}
            name="password"
            placeholder="Password"
            value={password.value}
            onChange={(event) => onInputChange(event, "password", setPassword)}
          />
          {/** If password does not contain at least one lowercase character then display error message **/}
          {password.errors.lowercase && (
            <InputErr>
              password should contain at least one lowercase character
            </InputErr>
          )}
          {/* If password does not contain at least one uppercase character then display error message*/}
          {password.errors.uppercase && (
            <InputErr>
              password should contain at least one uppercase character
            </InputErr>
          )}
          {/* If password does not contain at least one symbol or number then display error message*/}
          {password.errors.symbol && (
            <InputErr>
              password should contain at least one symbol or a number
            </InputErr>
          )}
          {/* If length of password is not greater than or equal to 8 then display error message*/}
          {password.errors.length && (
            <InputErr>password should be at least 8 characters long</InputErr>
          )}
        </FormInputDiv>
        {/* checkbox to toggle whether to show or hide password*/}
        {/* Show Password Container */}
        <ShowCheckboxDiv>
          {/* Show Password Label */}
          <label>
            {/* Show Password Checkbox */}
            <ShowCheckbox
              type="checkbox"
              onClick={() => setShowPassword(!showPassword)}
            />
            Show password
          </label>
        </ShowCheckboxDiv>
        {/* Forgot Password Link */}
        <ForgotPass>
          <ForgotLink to="/Forgot">Forgot Password?</ForgotLink>
        </ForgotPass>
        {/* Login Button */}
        <SubmitFormButton className="signIn-form-input-btn" type="submit">
          Log In
        </SubmitFormButton>
        {/* Sign Up Link */}
        <SignUpContainer>
          <SignUpText>Don't have an account?</SignUpText>
          <SignUpLink to="/signup">Sign Up</SignUpLink>
        </SignUpContainer>
      </Form>
    </SignInFormContainer>
  );
};

export default FormSignin;
