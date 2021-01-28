import React from "react";
import validateChangePassword from "../utils/validateChangePassword.utils";
import useSignIn from "../hooks/useSignIn.hooks.";

const changePassword = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useSignIn(
    submitForm,
    validateChangePassword
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Login</h1>

        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <button className="form-input-btn" type="submit">
          Sign in
        </button>
        <span className="form-input-login">
          Do-not have a account? Sign Up <a href="/">Signup</a>
        </span>
        <span className="form-input-login">
          Forgot Password? <a href="/Forgot">here</a>
        </span>
      </form>
    </div>
  );
};

export default changePassword;
