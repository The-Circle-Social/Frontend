//* Package Imports
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
//* Components Imports
import FormSignup from "../../components/FormSignup/FormSignup.component";
//* Assets Imports
import ImageBig from "../../assets/banner-big.png";
//* Styles Imports
import "./Signup.styles.scss";
//* Context
import { UserContext } from "../../Contexts/UserContext.context";
//* SignUp Page Component
const Signup = () => {
  //* Destructuring setUser from UserContext Context
  const { setUser } = useContext(UserContext);
  //* History
  const history = useHistory();
  //* Stores User Location
  const [userLocation, setUserLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  //* Gets user location if user has allowed location access and stores it in User Location Object
  useEffect(() => {
    //-  Native JS function to get user location
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      //- Getting Coords and Storing it in User Location Object
      setUserLocation({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
    });
    //- Setting Dependencies to empty so that this useEffect only once
  }, []);
  //* This Function is called when the user submits signup form.
  const handleSubmit = (
    e,
    username,
    password,
    email,
    confirmPassword,
    isTAC
  ) => {
    //- Prevents default form submission
    e.preventDefault();
    //- Checks If the user has any errors in signup inputs (for eg: email input, etc) if he has then preventing the API call by returning the func
    if (
      //- Checks if the user has any errors in email input
      Object.keys(email.errors).some((error) => email.errors[error]) ||
      //- Checks if the user has any errors in username input
      Object.keys(username.errors).some((error) => username.errors[error]) ||
      //- Checks if the user has any errors in password input
      Object.keys(password.errors).some((error) => password.errors[error]) ||
      //- Checks if the user has any errors in confirm password input
      Object.keys(confirmPassword.errors).some(
        (error) => confirmPassword.errors[error]
      ) ||
      //- Checks if the user has not allowed to Terms and Conditions
      !isTAC
    ) {
      //- If user has errors in signup inputs
      alert("Errr");
      //- Stop handleSubmit function.
      return;
    }
    //- Doing API Call to Signup to DjangoServer
    //- Giving :
    //- username as name1
    //- password as password1
    //- email as email1
    //- user location latitude as latitude1
    //- user location longitude as longitude1
    //- Method:Post
    axios({
      method: "post",
      url: "http://localhost:8000/register",

      data: JSON.stringify({
        name1: username.value,
        password1: password.value,
        email1: email.value,
        latitude1: userLocation.latitude,
        longitude1: userLocation.longitude,
      }),
    }).then(({ data }) => {
      //- Server will send either user info or error message in response to the request
      //- destructuring userid and error from the response
      const { id, error } = data;
      //- If any error then returning and stop the func.
      if (error) return alert(error);
      //- Setting userid and username in user object
      setUser({
        id,
        username: username.value,
      });
      //- Changing route to Homepage (ie "/")
      history.push("/");
    });
  };

  return (
    //* Main Container
    <div className="form-container">
      {/* Container for Elements which should be place Left */}
      <div className="form-content-left">
        {/* Logo Image container */}
        <div className="form-content-img-container">
          {/* Logo */}
          <img className="TheCircle" src={ImageBig} alt="Logo" />
        </div>
      </div>
      {/* Sign Form Components */}
      <FormSignup handleSubmit={handleSubmit} setUser={setUser} />
    </div>
  );
};

export default Signup;
