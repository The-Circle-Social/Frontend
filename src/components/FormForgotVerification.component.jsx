import React from "react";
import useForgetVerification from "../hooks/useForgetVerification.hooks";

const FormForgotVerification = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForgetVerification(
    submitForm
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>OTP VERFICATION</h1>

        <div className="form-inputs">
          <label className="form-label">OTP</label>
          <input
            className="form-input"
            type="OTP"
            name="OTP"
            placeholder="Enter your OTP"
            value={values.OTP}
            onChange={handleChange}
          />
          {errors.OTP && <p>{errors.OTP}</p>}
        </div>

        <button className="form-input-btn" type="submit">
          Verify
        </button>

        <span className="form-input-login">
          resend <a href="/Forgot">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormForgotVerification;
