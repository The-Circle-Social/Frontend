//* Pakage Imports
import React, { useState } from "react";
//* utils Imports
//* Verification util for verification of username , password, email, confirmPassword
import Verification from "../../utils/Verification.utils";
//* Styles Imports (Styled Components)
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
//* Signup Component
const FormSignup = ({ handleSubmit }) => {
  //- Boolean for if user wants to show the password or hide the password
  const [showPassword, setShowPassword] = useState(false);
  //- Boolean for if user has agreed to the Terms and Conditions
  const [isTAC, setIsTAC] = useState(false);
  //- Username object for errors(if any)(by default all errors are logged) in username field and username field's value
  const [username, setUsername] = useState({
    value: "",
    errors: {
      length: true,
      syntax: false,
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
  //- Confirm Password object for errors(if any)(by default all errors are logged) in confirm password field and confirm password field's value
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    errors: {
      equal: true,
    },
  });
  //- Email object for errors(if any)(by default all errors are logged) in email field and email field's value
  const [email, setEmail] = useState({
    value: "",
    errors: {
      syntax: true,
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
    //* Main Signup Form Container
    <SignFormContainer>
      {/*
       ** SignUp Form Heading
       */}
      <SignUpHeading>
        Welcome! <br /> Sign Up to continue
      </SignUpHeading>
      {/* Main Form */}
      <Form
        //- Calling handleSubmit Func when form is submitted with required params
        onSubmit={(e) =>
          handleSubmit(e, username, password, email, confirmPassword, isTAC)
        }
        noValidate
      >
        {/* Secondary Heading */}
        <FormHeading>Create account</FormHeading>
        {/* Input Container For Username */}
        <InputContainer>
          {/*  Username field label*/}
          <FormLabel>
            {/* Username Field */}
            <FormInput
              type="text"
              name="username"
              placeholder="Name"
              value={username.value}
              onChange={(e) => onInputChange(e, "username", setUsername)}
              required
            />
          </FormLabel>
          {/*Errors in Username */}
          {/* If syntax of username is incorrect then display error message*/}
          {username.errors && username.errors.syntax && (
            <InputErr>
              Username should only contain alphanumeric characters and
              underscores
            </InputErr>
          )}
          {/* If length of username is not greater than or equal to 5 then display error message*/}
          {username.errors && username.errors.length && (
            <InputErr>Username should be at least 5 characters long</InputErr>
          )}
        </InputContainer>
        {/* Input Container for email  */}
        <InputContainer>
          {/* Email field label */}
          <FormLabel>
            {/* Email field */}
            <FormInput
              type="email"
              name="email"
              placeholder="Your email address"
              value={email.value}
              onChange={(e) => onInputChange(e, "email", setEmail)}
              required
            />
          </FormLabel>
          {/* If email syntax is incorrect then display error message*/}
          {email.errors.syntax && <InputErr>Invalid email</InputErr>}
        </InputContainer>
        {/* Input Container for Password Field */}
        <InputContainer>
          {/* Password field label*/}
          <FormLabel>
            {/* Password field*/}
            <FormInput
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create Password"
              value={password.value}
              onChange={(e) => onInputChange(e, "password", setPassword)}
              required
            />
          </FormLabel>
          {/* If password does not contain at least one lowercase character then display error message*/}
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
        </InputContainer>
        {/* Input Container for confirm password */}
        <InputContainer>
          {/* confirm password field label */}
          <FormLabel>
            {/* confirm password field */}
            <FormInput
              type={showPassword ? "text" : "password"}
              name="password2"
              placeholder="Confirm Password"
              value={confirmPassword.value}
              onChange={(e) =>
                onInputChange(e, "confirmPassword", setConfirmPassword)
              }
              required
            />
          </FormLabel>
          {/* If confirm password is not equal to password then display error message*/}
          {confirmPassword.errors.equal && (
            <InputErr>Confirm password should match with the password</InputErr>
          )}
        </InputContainer>
        {/* checkbox to toggle whether to show or hide password*/}
        {/* Show Password Container */}
        <ShowPasswordContainer>
          {/* Show Password Checkbox */}
          <input
            type="checkbox"
            id="signup-show--password"
            onClick={() => setShowPassword(!showPassword)}
          />
          {/* Show Password Label */}
          <ShowPasswordLabel htmlFor="signup-show--password">
            Show Password
          </ShowPasswordLabel>
        </ShowPasswordContainer>
        {/* Submit Btn */}
        <SubmitBtn type="submit">Sign Up</SubmitBtn>
        {/* Terms and Conditions Container */}
        <TAndCContainer>
          {/* Terms and Conditions checkbox  */}
          <input
            type="checkbox"
            id="signup-tc"
            required
            checked={isTAC}
            onClick={() => setIsTAC((isTAC) => setIsTAC(!isTAC))}
          />
          {/* Terms and Conditions label */}
          <TAndCLabel htmlFor="signup-tc">
            By creating account or logging in , you agree to BookMyMum's{" "}
            <TAndCLink>Condition of Use</TAndCLink> and{" "}
            <TAndCLink>policy</TAndCLink>
          </TAndCLabel>
        </TAndCContainer>
        {/* If user has nor approved Terms and Conditions then display error message*/}
        {!isTAC && <InputErr>Please allow Term and Condition </InputErr>}
      </Form>
      {/* Login Link */}
      <LoginLinkContainer>
        Already have an account? <LoginLink to="/SignIn">Log In</LoginLink>
      </LoginLinkContainer>
    </SignFormContainer>
  );
};

export default FormSignup;
