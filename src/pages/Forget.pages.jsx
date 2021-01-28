import React, { useState } from "react";
import ImageBig from "../assets/banner-big.png";
import FormForgotVerification from "../components/FormForgotVerification.component";
import FormForgot from "../components/FormForgot/FormForgot.component";

const ForgetPasswordFormComp = ({history,setUser}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
 const onVerified = (username) => {
   setUser({username})
   history.push("/")
 }
  return (
    <div className="form-container">
      <span className="close-btn">×</span>
      <div className="form-content-left">
        <div className="form-content-img-container">
          <img className="TheCircle" src={ImageBig} alt="Logo" />
        </div>
      </div>

      {!isSubmitted ? (
        <FormForgot submitForm={submitForm} />
      ) : (
        <FormForgotVerification submitForm={onVerified}  />
      )}
    </div>
  );
};

export default ForgetPasswordFormComp;
