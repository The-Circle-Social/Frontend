import React, {useState} from "react";
import ImageBig from "../assets/banner-big.png";
import useChangePassword from "../hooks/useChangePassword.hooks";

const ChangePassword = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useChangePassword(
    submitForm,
  );

  const [showPassword, setShowPassword] = useState(false);

  console.log(values);


  return (
    <div className="form-container">
      <span className="close-btn">×</span>
      <div className="form-content-left">
        <div className="form-content-img-container">
          <img className="TheCircle" src={ImageBig} alt="Logo" />
        </div>
      </div>
      <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Change Password</h1>

        <div className="form-inputs">
            <input
              type={showPassword ? "text" : "password"}
              name="pass1"
              placeholder="Create Password"
              value={values.pass1}
              onChange={handleChange}
              required
            />
            {values.passwordError && <p>{values.passwordError}</p>}
        </div>
        <div className="form-inputs">
          <input
                type={showPassword ? "text" : "password"}
                name="pass2"
                placeholder="Confirm Password"
                value={values.pass2}
                onChange={handleChange}
                required
              />
              {values.passwordError && <p>{values.passwordError}</p>}
        </div>
        <label><input type="checkbox" onClick={() => setShowPassword(!showPassword)}/> Show password</label>
        <button type="submit">
          Change Password
        </button>
      </form>
    </div>
     
    </div>
    
  );
};

export default ChangePassword;
