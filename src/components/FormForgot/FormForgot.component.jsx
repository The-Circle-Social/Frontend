import React from "react";
import validateForget from "../../utils/validateForget.utils";
import useForget from "../../hooks/useForget.hooks";
import "./FormForgot.styles.scss";

const FormForgot = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForget(
    submitForm,
    validateForget
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Password Assistance</h1>
        <p>Enter the e-mail address associated with your The Circle account.</p>
        <div className="form-inputs">

          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <button className="form-input-btn" type="submit">
          Continue
        </button>
        <span className="form-back">
          <a href="/">Back</a>
        </span>
        
      </form>
    </div>
  );
};

export default FormForgot;
