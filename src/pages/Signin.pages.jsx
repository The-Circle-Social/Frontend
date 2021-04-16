//** Package Imports
import React, { useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
//** Assets Imports
import ImageBig from "../assets/banner-big.png";
//**  Components Imports
import FormSignin from "../components/FormSignIn/FormSignin.component";
//** Context Imports
import { UserContext } from "../Contexts/UserContext.context";

const Signin = () => {
  //* Destructuring setUser from UserContext Context
  const { setUser } = useContext(UserContext);
  //* History
  const history = useHistory();
  //* Stores User Location
  //* This Function is called when the user submits signup form.
  const handleSubmit = (e, password, email) => {
    //- Prevents default form submission
    e.preventDefault();
    //- Checks If the user has any errors in signup inputs (for eg: email input, etc) if he has then preventing the API call by returning the func
    if (
      //- Checks if the user has any errors in email input
      Object.keys(email.errors).some((error) => email.errors[error]) ||
      //- Checks if the user has any errors in password input
      Object.keys(password.errors).some((error) => password.errors[error])
    ) {
      //- If user has errors in signup inputs
      alert("Errr");
      //- Stop handleSubmit function.
      return;
    }
    //- Doing API Call to Signup to DjangoServer
    //- Giving :
    //-- email as email1
    //-- password as password1
    //- Method:Post
    axios({
      method: "post",
      url: "http://localhost:8000/login",
      data: JSON.stringify({
        password1: password.value,
        email1: email.value,
      }),
    }).then(({ data }) => {
      //- Server will send either user info or error message in response to the request
      //- destructuring userid and error from the response
      const { error, ...userInfo } = data;
      //- If any error then returning and stop the func.
      if (error) return alert(error);
      //- Setting userid and username in user object
      setUser(userInfo);
      //- Changing route to Homepage (ie "/")
      history.push("/");
    });
  };
  return (
    //* Form container
    <div className="form-container">
      {/* Container for Elements which should be place Left */}
      <div className="form-content-left">
        {/* Logo Image container */}
        <div className="form-content-img-container">
          {/* Logo */}
          <img className="TheCircle" src={ImageBig} alt="Logo" />
        </div>
      </div>
      {/* Sign In Form*/}
      <FormSignin handleSubmit={handleSubmit} />
    </div>
  );
};

export default Signin;
