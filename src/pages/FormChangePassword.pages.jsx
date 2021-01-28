import React, { useState } from "react";

import FormForgotVerification from "./FormForgotVerification";
import changePassword from "../components/changePassword";
import FormForgot from "../components/FormForgot.component";
const FormChangePassword = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className="form-container">
      <span className="close-btn">×</span>
      <div className="form-content-left">
        <h1>tare je nakhvu hoy te</h1>
      </div>

      {!isSubmitted ? (
        <FormForgotVerification submitForm={submitForm} />
      ) : (
        <changePassword />
      )}
    </div>
  );
};

export default FormChangePassword;
