import React, { useState } from "react";
import ImageBig from "../assets/banner-big.png";
import FormSignin from "../components/FormSignIn/FormSignin.component";

const Signin = ({history ,setUser}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
  
    setIsSubmitted(true);
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
    <FormSignin submitForm={submitForm} setUser={setUser}/>
    </div>
  );
};

export default Signin;
