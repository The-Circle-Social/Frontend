import axios from "axios";
import { useState, useEffect } from "react";

const useForget = (callback, validate) => {
  //const [checker,setChecker]=useState({})
  const [values3, setValues3] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [OTP, setOTP] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  validate = () => {
    //let emailError = errors.email;

    if (!values3.email) {
      errors.email = "Email required";
      return false;
    } else if (!/\S+@\S+\.\S+/.test(values3.email)) {
      errors.email = "Email address is invalid";
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues3({
      ...values3,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = validate();

    if (valid === true) {
      setErrors(validate(values3));
      setIsSubmitting(true);

      const user = {
        email1: values3.email,
      };
      const user1 = JSON.stringify(user);
      console.log(user1);
      axios({
        method: "post",
        url: "http://localhost:8000/sendemail",
        data: user1,
      })
        .then((resp) => {
          console.log(resp.status);
          console.log(resp.data);
          setOTP(resp.data.OTP);
        })
        .catch((err) => console.log(err));
    }
  };

  console.log(OTP);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);
  return { handleChange, handleSubmit, values: values3, errors, OTP };
};

export default useForget;
