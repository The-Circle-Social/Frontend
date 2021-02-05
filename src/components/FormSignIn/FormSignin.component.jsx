import React,{useState,useEffect} from "react";
import validateChangePassword from "../../utils/validateChangePassword.utils";
import useSignIn from "../../hooks/useSignIn.hooks.";
import { SignInFormContainer, Form, SignInFormHeading, ShowCheckboxDiv, ShowCheckbox, ForgotPass, ForgotLink, SubmitFormButton, SignUpContainer, SignUpText, SignUpLink, FormInputDiv, FormEmailInput, FormPassInput } from "./FormSignIn.styles";
//import "./FormSignIn.styles.scss";

const FormSignin = ({ submitForm ,setUser }) => {
  const { handleChange, handleSubmit, values, errors, a } = useSignIn(
    submitForm,
    validateChangePassword
  );
  useEffect(() => {
    setUser(values)
    console.log(values)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const [showPassword,setShowPassword] = useState(false);
  return (
    <SignInFormContainer>
      <Form onSubmit={handleSubmit} className="form" noValidate>
        <SignInFormHeading>
          Welcome!<br />Log In to continue
        </SignInFormHeading>

        <FormInputDiv>
          <FormEmailInput
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </FormInputDiv>
        <FormInputDiv>
          <FormPassInput
            type={!showPassword?"password":"text"}
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </FormInputDiv>
        <ShowCheckboxDiv>
          {/* <input type="checkbox" id="show-pass" name="show-pass" value="Show" />
          <span id="checkbox-label">Show password</span> */}
          <label><ShowCheckbox type="checkbox" onClick={() => setShowPassword(!showPassword)}/> Show password</label>
        </ShowCheckboxDiv>

        <ForgotPass>
          <ForgotLink href="/Forgot">Forgot Password?</ForgotLink>
        </ForgotPass>

        <SubmitFormButton className="signIn-form-input-btn" type="submit">
          Log In
        </SubmitFormButton>

        <SignUpContainer>
          <SignUpText>Don't have an account?</SignUpText>
          <SignUpLink href="/Signup">Sign Up</SignUpLink>
        </SignUpContainer>
        
      </Form>
    </SignInFormContainer>
  );
};

export default FormSignin;
